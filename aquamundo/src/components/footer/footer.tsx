import { LuFish } from "react-icons/lu";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    /* CONTAINER PRINCIPAL DO RODAPÉ:
       - bg-[#0f1729]: Azul marinho muito escuro, quase preto, para contraste com o texto.
       - text-white: Define a cor base do texto como branco.
    */
    <footer className="bg-[#0f1729] text-white">
      
      {/* SEÇÃO DE CONTEÚDO (GRID SISTEMA):
         - max-w-screen-xl mx-auto: Centraliza o conteúdo e limita a largura em 1280px.
         - px-4 py-12: Padding interno para evitar que o conteúdo encoste nas bordas.
         - flex flex-col md:flex-row: No mobile empilha colunas, no desktop coloca-as lado a lado.
         - gap-12: Espaçamento generoso entre as colunas.
         - justify-between: Distribui as colunas igualmente pelo espaço disponível.
      */}
      <div
        className="
          max-w-screen-xl mx-auto
          px-4 py-12
          flex flex-col md:flex-row
          gap-12 justify-between
        "
      >

        {/* COLUNA 1: LOGO E DESCRIÇÃO
           - md:max-w-md: Limita a largura do texto no desktop para manter a legibilidade.
           - text-[#5ca2b5]: Azul turquesa (cor da marca) para dar destaque visual.
        */}
        <div className="flex flex-col gap-4 md:max-w-md">
          <div className="flex items-center gap-3">
            <LuFish className="text-[#5ca2b5]" size={38} />
            <h1 className="text-3xl md:text-4xl font-bold text-[#5ca2b5]">
              Aquamundo
            </h1>
          </div>

          {/* leading-relaxed: Aumenta o espaço entre as linhas do texto, facilitando a leitura da descrição. */}
          <p className="text-sm md:text-lg text-gray-200 leading-relaxed">
            Sua loja completa de aquarismo. Trazendo a beleza dos oceanos e
            rios para dentro da sua casa com responsabilidade e paixão.
          </p>
        </div>

        {/* COLUNA 2: NAVEGAÇÃO
           - ul: Lista de links para as páginas internas.
           - transition-colors: Suaviza a troca de cor ao passar o mouse sobre os links.
        */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-bold text-[#5ca2b5]">
            Navegação
          </h2>

          <ul className="flex flex-col gap-3 text-sm md:text-lg">
            {/* MÉTODO .MAP(): Gera a lista de navegação dinamicamente para facilitar a manutenção. */}
            {["Loja", "Sobre nós", "Contato", "Carrinho"].map((item) => (
              <li key={item}>
                <a className="hover:text-[#5ca2b5] transition-colors cursor-pointer">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUNA 3: CONTATOS
           - gap-3: Espaço uniforme entre os ícones e os textos de contato.
           - break-all: Garante que e-mails longos não quebrem o layout em telas pequenas.
        */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-bold text-[#5ca2b5]">
            Contatos
          </h2>

          <div className="flex items-center gap-3 text-sm md:text-lg">
            <FaWhatsapp size={22} className="text-[#5ca2b5]" />
            <span className="hover:text-[#5ca2b5] transition-colors cursor-pointer">
              11 99999-9999
            </span>
          </div>

          <div className="flex items-center gap-3 text-sm md:text-lg">
            <FiMapPin size={22} className="text-[#5ca2b5]" />
            <span className="hover:text-[#5ca2b5] transition-colors cursor-pointer">
              Av. Paulista, 1000
            </span>
          </div>

          <div className="flex items-center gap-3 text-sm md:text-lg break-all">
            <MdOutlineAlternateEmail size={22} className="text-[#5ca2b5]" />
            <span className="hover:text-[#5ca2b5] transition-colors cursor-pointer">
              contato@aquamundo.com
            </span>
          </div>
        </div>

      </div>

      {/* LINHA DIVISÓRIA:
         - h-px: Espessura de 1 pixel.
         - bg-white/10: Cor branca com apenas 10% de opacidade, criando um efeito sutil e elegante.
      */}
      <div className="w-full h-px bg-white/10" />

      {/* COPYRIGHT:
         - text-center: Centraliza o texto legal.
         - text-gray-400: Cor cinza mais escura para não distrair da navegação.
         - py-4: Espaçamento no topo e base da faixa final.
      */}
      <p className="text-center text-gray-400 text-xs md:text-base py-4">
        © 2024 AquaMundo. Todos os direitos reservados.
      </p>

    </footer>
  );
}