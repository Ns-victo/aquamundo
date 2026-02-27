import peixe_header from "../../assets/imagens/peixe_header.jpeg";
import racao from "../../assets/imagens/racao.jpg";
import bomba_submersa from "../../assets/imagens/bomba_submersa.jpg";
import decoracao from "../../assets/imagens/decoracao.jpg";
import { FaOpencart } from "react-icons/fa6";

export default function DestaquesSemana() {
  const produtos = [
    {
      nome: "Beta Splendens",
      desc: "Peixes Bettas coloridos, ideais para iniciantes, fáceis de cuidar e muito resistentes",
      preco: "R$ 29,90",
      img: peixe_header,
    },
    {
      nome: "Ração Premium",
      desc: "Nutrição balanceada para peixes ornamentais, mantendo cores vibrantes e saúde ideal",
      preco: "R$ 39,90",
      img: racao,
    },
    {
      nome: "Bomba Submersa",
      desc: "Circulação eficiente para aquários de diferentes tamanhos, garantindo oxigenação ideal",
      preco: "R$ 79,90",
      img: bomba_submersa,
    },
    {
      nome: "Decoração Natural",
      desc: "Deixe seu aquário mais bonito e natural com pedras, plantas e elementos decorativos",
      preco: "R$ 49,90",
      img: decoracao,
    },
  ];

  return (
    /* SEÇÃO DE DESTAQUES:
       - bg-[#F5F9F8]: Fundo em tom esverdeado muito leve (menta).
       - py-16: Espaçamento vertical de 64px.
       - overflow-x-hidden: Garante que nada saia da largura da tela, evitando barra de rolagem horizontal indesejada no corpo do site.
    */
    <section className="bg-[#F5F9F8] py-16 overflow-x-hidden">
      
      {/* CONTAINER ALINHADOR:
         - max-w-[1600px]: Largura máxima expandida para comportar 4 colunas confortavelmente.
         - mx-auto: Centralização horizontal.
         - px-4: Margem de segurança nas laterais no mobile.
      */}
      <div className="max-w-[1600px] mx-auto px-4 ">
        
        {/* ================= CABEÇALHO ================= */}
        {/* Espaçamento e Tipografia:
           - mb-10: Afasta o título dos cards (40px).
           - text-3xl a 5xl: Título responsivo que cresce conforme o monitor.
           - text-gray-600: Subtítulo em cinza para suavizar a leitura.
        */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
            Destaques da Semana
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Confira os produtos mais populares da semana
          </p>
        </div>

        {/* ================= GRADE DE CARDS ================= */}
        {/* Lógica de Layout Duplo:
           - Mobile: flex + overflow-x-auto (permite deslizar lateralmente).
           - Desktop: lg:grid + lg:grid-cols-4 (vira uma grade de 4 colunas fixa).
           - lg:overflow-visible: Remove o scroll lateral em telas grandes.
        */}
        <div className="flex gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible">
          {produtos.map((item, index) => (
            
            /* ESTRUTURA DO CARD:
               - group: Permite que elementos internos (como o botão) reajam ao mouse.
               - w-[380px] sm:w-[300px]: Controla a largura para que o scroll mobile seja visível.
               - lg:w-auto: No desktop, o card preenche o espaço da coluna da grade.
               - hover:shadow-xl: Efeito de profundidade ao interagir.
            */
            <div
              key={index}
              className="group flex-shrink-0
                        w-[380px] sm:w-[300px] lg:w-auto
                        bg-white rounded-2xl shadow-md flex flex-col
                        hover:shadow-xl transition-shadow duration-300
                        cursor-pointer"
            >
              {/* ÁREA DA IMAGEM:
                 - relative: Necessário para posicionar o botão flutuante sobre a imagem.
                 - h-72: Altura fixa para manter todos os cards alinhados.
                 - object-cover: Corta a imagem sem distorcê-la.
              */}
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.nome}
                  className="h-72 w-full object-cover rounded-t-2xl"
                />

                {/* BOTÃO FLUTUANTE (DESKTOP):
                   - bg-gradient-to-t: Cria um sombreamento suave atrás do botão.
                   - opacity-0 + translate-y-full: O botão começa invisível e "escondido" abaixo da imagem.
                   - group-hover: Revela o botão e o faz "subir" para dentro da imagem quando o mouse entra.
                */}
                <div
                  className="
                    absolute inset-0 flex items-end justify-center
                    bg-gradient-to-t from-black/30 to-transparent
                    rounded-t-2xl
                    opacity-0 transform translate-y-full
                    transition-all duration-500 ease-out
                    group-hover:opacity-100 group-hover:translate-y-0
                    p-4
                  "
                >
                  {/* Botão de Adicionar (Desktop):
                     - active:scale-95: Efeito de "clique real" que encolhe o botão ao ser pressionado.
                  */}
                  <button
                    className="
                      w-full py-3 rounded-xl
                      bg-white text-blue-600 border border-blue-600
                      flex items-center justify-center gap-2
                      text-lg sm:text-xl font-semibold
                      shadow-md
                      hover:bg-blue-50
                      active:scale-95
                    "
                  >
                    <FaOpencart size={20} />
                    Adicionar ao carrinho
                  </button>
                </div>
              </div>

              {/* ÁREA DE TEXTO:
                 - p-6: Padding interno generoso.
                 - flex-1: Faz com que a descrição ocupe o espaço disponível, alinhando os preços na base.
              */}
              <div className="p-6 flex flex-col flex-1">
                {/* Nome do Produto: Cor Azul Oceano (#0284C7) */}
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#0284C7]">
                  {item.nome}
                </h3>

                <p className="text-lg sm:text-xl text-gray-600 mt-2 flex-1">
                  {item.desc}
                </p>

                {/* Rodapé do Card:
                   - justify-between: Separa o preço do link de detalhes.
                   - text-[#38BDF8]: Azul claro vibrante para o preço.
                */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#38BDF8]">
                    {item.preco}
                  </span>
                  <span className="text-lg text-gray-500 hover:text-blue-600 cursor-pointer transition-colors">
                    Ver detalhes
                  </span>
                </div>
              </div>

              {/* BARRA DE AÇÃO MOBILE:
                 - lg:hidden: Esta barra azul só aparece em celulares/tablets.
                 - bg-[#0284C7]: Fundo azul sólido para facilitar o toque.
                 - h-20: Altura maior para servir como uma zona de clique confortável para o polegar.
              */}
              <div className="bg-[#0284C7] w-full h-20 flex flex-row items-center justify-center 
                              gap-10 rounded-b-xl lg:hidden">
                <button className="text-white text-xl font-medium">Adicionar ao Carrinho</button>
                <FaOpencart className="text-white" size={25} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}