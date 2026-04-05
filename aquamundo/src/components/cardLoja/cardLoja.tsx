import { FaOpencart } from "react-icons/fa6";
import { useCarrinho } from "../../context/carrinhoContext";
import { produtos } from "../../data/produtos";

export default function DestaquesSemana() {
  const { adicionarItem } = useCarrinho();

  return (
    <section className="overflow-x-hidden py-4 sm:py-6 lg:py-8">
      <div className="mx-auto px-0">

        {/* GRID DOS CARDS */}
        <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 xl:gap-8">

          {produtos.map((item, index) => (

            <div
              key={index}
              className="group flex h-full min-h-[540px] w-[300px] min-w-0 flex-col overflow-hidden rounded-2xl bg-white shadow-md 
              transition-all duration-300 hover:shadow-xl cursor-pointer"
            >

              {/* IMAGEM */}
              <div className="relative overflow-hidden rounded-t-2xl">

                <img
                  src={item.img}
                  alt={item.nome}
                  className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* BOTÃO HOVER */}
                <div
                  className="absolute inset-0 hidden items-end justify-center bg-gradient-to-t from-black/40 to-transparent p-4 
                  opacity-0 translate-y-6 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex"
                >

                  <button
                    type="button"
                    onClick={() => adicionarItem(item)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-blue-600 bg-white py-3 text-lg 
                    font-semibold text-blue-600 shadow-md transition hover:bg-blue-50 active:scale-95 cursor-pointer"
                  >
                    <FaOpencart size={20} />
                    Adicionar ao carrinho
                  </button>

                </div>

              </div>

              {/* TEXTO */}
              <div className="flex flex-1 flex-col p-6">

                <h3 className="text-2xl font-semibold text-[#0284C7]">
                  {item.nome}
                </h3>

                <p className="mt-2 flex-1 text-gray-600">
                  {item.desc}
                </p>

                <div className="mt-4 flex items-center justify-between">

                  <span className="text-2xl font-bold text-[#38BDF8]">
                    {item.preco.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>

                  <span className="cursor-pointer text-gray-500 transition-colors hover:text-blue-600">
                    Ver detalhes
                  </span>

                </div>

              </div>

              {/* BOTÃO MOBILE */}
              <div className="mt-auto flex h-20 w-full items-center justify-center gap-4 rounded-b-2xl bg-[#0284C7] lg:hidden">

                <button
                  type="button"
                  onClick={() => adicionarItem(item)}
                  className="font-medium text-white cursor-pointer"
                >
                  Adicionar ao Carrinho
                </button>

                <FaOpencart className="text-white" size={22} />

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}