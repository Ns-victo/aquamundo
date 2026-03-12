import { LuFish } from "react-icons/lu";
import { FaOpencart } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

import MenuMobile from "../menuMobile/menuMobile";

export default function Header() {

  /* ESTADO DO MENU MOBILE:
     - openMenu: Booleano que controla se o menu mobile está aberto ou fechado.
     - setOpenMenu: Função responsável por atualizar o estado do menu.
     - Inicialmente começa como 'false', ou seja, menu fechado.
  */
  const [openMenu, setOpenMenu] = useState(false);

  /* FUNÇÃO DE TOGGLE DO MENU:
     - toggleMenu: Alterna o estado atual do menu mobile.
     - prev => !prev: Inverte o valor anterior (true vira false e vice-versa).
     - Utilizado ao clicar no ícone do menu hambúrguer.
  */
  const toggleMenu = () => {
    setOpenMenu(prev => !prev);
  }


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
        fixed top-0 left-0 w-full z-50  
        transition-all duration-700 
        ${scrolled
          ? "items-center bg-[#EFF6FF] shadow-md backdrop-blur-md h-25 "
          : "bg-transparent "}
      `}
    >
      {/* CONTAINER ALINHADOR:
         - max-w-7xl mx-auto: Mantém o menu alinhado com o restante do site.
         - justify-between: Separa a Logo, a Navegação e o Carrinho.
         - px-8 py-4: Espaçamento interno horizontal e vertical para manter o layout equilibrado.
      */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4 ">

        {/* ÁREA DA LOGO:
           - Contém o ícone da marca e o nome da empresa.
           - flex items-center gap-3: Mantém ícone e texto alinhados horizontalmente com espaçamento.
           - As cores mudam dinamicamente dependendo do estado de scroll.
        */}
        <div className="flex items-center gap-3">
          <LuFish
            className={`${scrolled ? "text-blue-800" : "text-[#5ca2b5]"} transition-colors`}
            size={42}
          />
          <h1
            className={`font-playfair text-2xl font-bold transition-colors  ${
              scrolled ? "text-blue-900" : "text-white"
            }`}
          >
            Aqua Mundo
          </h1>
        </div>

        {/* NAVEGAÇÃO PRINCIPAL:
           - hidden sm:block: Esconde o menu em telas pequenas (mobile).
           - A navegação aparece apenas a partir do breakpoint "sm".
        */}
        <nav className="hidden sm:block">
          
          {/* LISTA DE LINKS:
             - flex gap-8: Distribui os links horizontalmente com espaçamento.
             - .map(): Percorre um array de objetos contendo label e rota.
             - Essa abordagem evita repetição de código e facilita manutenção.
          */}
          <ul className="flex gap-8 ">
            {[
              { label: "Início", to: "/" },
              { label: "Loja", to: "/loja" },
              { label: "Sobre nós", to: "/sobrenos" },
              { label: "Contato", to: "/contato" },
            ].map(nav => (
              
              /* ITEM DA LISTA DE NAVEGAÇÃO:
                 - key={nav.label}: Chave única exigida pelo React para listas.
                 - Cada item renderiza um Link para navegação interna.
              */
              <li key={nav.label}>
                <Link
                  to={nav.to}
                  className={`font-lato text-2xl transition-colors ${
                    scrolled
                      ? "text-blue-900 hover:text-[#5ca2b5]"
                      : "text-white hover:text-[#5ca2b5]"
                  }`}
                >
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ÍCONE DE CARRINHO:
           - Representa o acesso ao carrinho de compras.
           - hidden sm:block: Aparece apenas em telas maiores.
           - hover:text: Aplica feedback visual ao passar o mouse.
           - transition-colors: Suaviza a mudança de cores.
        */}
        <FaOpencart
          size={40}
          className={`cursor-pointer transition-colors hidden sm:block ${
            scrolled
              ? "text-blue-900 hover:text-[#5ca2b5]"
              : "text-white hover:text-[#5ca2b5]"
          }`}
        />

        {/* ÍCONE DE MENU MOBILE (HAMBÚRGUER):
           - AiOutlineMenu: Ícone utilizado para abrir o menu em telas pequenas.
           - block sm:hidden: Visível apenas no mobile.
           - onClick={toggleMenu}: Executa a função que abre ou fecha o menu.
           - transition-colors: Mantém a transição suave entre cores.
        */}
        <AiOutlineMenu
          size={35}
          onClick={toggleMenu}
          className={`block sm:hidden cursor-pointer transition-colors ${
            scrolled
              ? "text-blue-900 hover:text-[#5ca2b5]"
              : "text-white hover:text-[#5ca2b5]"
          }`}
          
        />
        
      </div>
      
      {/* RENDERIZAÇÃO CONDICIONAL DO MENU MOBILE:
         - openMenu && <MenuMobile />
         - O menu mobile só aparece quando openMenu for true.
         - onClose={toggleMenu}: Permite que o menu se feche ao clicar em algum botão interno.
      */}
      { openMenu && <MenuMobile onClose={toggleMenu} /> }
   
    </header>

  );
}