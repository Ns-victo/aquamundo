import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Produto } from "../data/produtos";

type ItemCarrinho = Produto & {
  quantidade: number;
};

type CarrinhoContextData = {
  itensCarrinho: ItemCarrinho[];
  adicionarItem: (produto: Produto) => void;
  removerItem: (produtoId: number) => void;
  limparCarrinho: () => void;
};

const STORAGE_KEY = "aquamundo:carrinho";

const CarrinhoContext = createContext<CarrinhoContextData | undefined>(undefined);

function carregarItensIniciais(): ItemCarrinho[] {
  if (typeof window === "undefined") {
    return [];
  }

  const itensSalvos = window.localStorage.getItem(STORAGE_KEY);

  if (!itensSalvos) {
    return [];
  }

  try {
    return JSON.parse(itensSalvos) as ItemCarrinho[];
  } catch {
    return [];
  }
}

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [itensCarrinho, setItensCarrinho] = useState<ItemCarrinho[]>(carregarItensIniciais);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(itensCarrinho));
  }, [itensCarrinho]);

  const adicionarItem = (produto: Produto) => {
    setItensCarrinho(itensAtuais => {
      const itemExistente = itensAtuais.find(item => item.id === produto.id);

      if (itemExistente) {
        return itensAtuais.map(item =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item,
        );
      }

      return [...itensAtuais, { ...produto, quantidade: 1 }];
    });
  };

  const removerItem = (produtoId: number) => {
    setItensCarrinho(itensAtuais =>
      itensAtuais.filter(item => item.id !== produtoId),
    );
  };

  const limparCarrinho = () => {
    setItensCarrinho([]);
  };

  return (
    <CarrinhoContext.Provider
      value={{ itensCarrinho, adicionarItem, removerItem, limparCarrinho }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  const context = useContext(CarrinhoContext);

  if (!context) {
    throw new Error("useCarrinho precisa ser usado dentro de CarrinhoProvider");
  }

  return context;
}

export type { ItemCarrinho };