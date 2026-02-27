import { LuFish } from "react-icons/lu";
import { FaOpencart } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function Header() {
  /* ESTADO DE SCROLL:
     - scrolled: Booleano que indica se o usuário rolou a página mais de 50px.
     - setScrolled: Função para atualizar esse estado.
  */
  const [scrolled, setScrolled] = useState(false);

  /* MONITORAMENTO DE ROLAGEM:
     - useEffect: Hook que executa o código assim que o componente é montado.
     - window.scrollY > 50: Verifica se a página foi movida para baixo.
     - cleanup (removeEventListener): Garante que o evento seja removido ao fechar a página, evitando lentidão.
  */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    /* HEADER DINÂMICO:
       - fixed top-0: Trava o menu no topo da tela.
       - z-50: Garante que o menu fique por cima de todos os outros elementos.
       - hidden sm:block: Esconde o menu no mobile (para usar um menu hambúrguer, por exemplo) e mostra a partir de tablets.
       - transition-all duration-700: Faz a transição de cores e fundo ser suave e elegante.
       - Estilos Condicionais: Se 'scrolled' for true, aplica fundo claro, sombra e desfoque (blur).
    */
    <header
      className={`
        fixed top-0 left-0 w-full z-50 hidden sm:block
        transition-all duration-700
        ${scrolled
          ? "items-center bg-[#EFF6FF] shadow-md backdrop-blur-md h-25 "
          : "bg-transparent "}
      `}
    >
      {/* CONTAINER ALINHADOR:
         - max-w-7xl mx-auto: Mantém o menu alinhado com o restante do site.
         - justify-between: Separa a Logo, a Navegação e o Carrinho.
      */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4 ">

        {/* ÁREA DA LOGO:
           - O ícone e o texto mudam de cor dinamicamente conforme o scroll.
        */}
        <div className="flex items-center gap-3">
          <LuFish
            className={`${scrolled ? "text-blue-800" : "text-[#5ca2b5]"} transition-colors`}
            size={42}
          />
          <h1
            className={`text-3xl font-bold transition-colors ${
              scrolled ? "text-blue-900" : "text-white"
            }`}
          >
            Aqua Mundo
          </h1>
        </div>

        {/* NAVEGAÇÃO PRINCIPAL:
           - .map(): Gera os links automaticamente.
           - hover:text-[#5ca2b5]: Feedback visual ao passar o mouse.
        */}
        <nav>
          <ul className="flex gap-8">
            {["Início", "Loja", "Sobre nós", "Contato"].map(item => (
              <li key={item}>
                <a
                  className={`text-2xl cursor-pointer transition-colors ${
                    scrolled
                      ? "text-blue-900 hover:text-[#5ca2b5]"
                      : "text-white hover:text-[#5ca2b5]"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ÍCONE DE CARRINHO:
           - FaOpencart: Ícone intuitivo de compras.
           - transition-colors: Suaviza a troca de cor branca para azul.
        */}
        <FaOpencart
          size={40}
          className={`cursor-pointer transition-colors ${
            scrolled
              ? "text-blue-900 hover:text-[#5ca2b5]"
              : "text-white hover:text-[#5ca2b5]"
          }`}
        />
      </div>
    </header>
  );
}