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
       - overflow-x-hidden: Evita rolagem horizontal indesejada.
    */
    <section className="bg-[#F5F9F8] py-16 overflow-x-hidden">

      {/* CONTAINER PRINCIPAL
         - max-w-[1600px]: largura máxima da seção
         - mx-auto: centraliza na tela
         - px-4: espaçamento lateral para mobile
      */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* ================= CABEÇALHO ================= */}
        <div className="mb-10">

          {/* TÍTULO */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
            Destaques da Semana
          </h1>

          {/* SUBTÍTULO */}
          <p className="text-gray-600 text-base sm:text-lg">
            Confira os produtos mais populares da semana
          </p>

        </div>


        {/* ================= GRADE DE CARDS ================= */}

        {/* Layout Responsivo
           Mobile → scroll horizontal
           Desktop → grid com 4 colunas
        */}
        <div className="grid auto-cols-[280px] grid-flow-col gap-6 overflow-x-auto pb-4 sm:grid-flow-row sm:grid-cols-2 sm:auto-rows-fr sm:overflow-visible xl:grid-cols-4 xl:gap-8">

          {produtos.map((item, index) => (

            /* CARD DO PRODUTO
               - group: permite ativar efeitos hover nos elementos internos
               - hover:shadow-xl: aumenta a sombra ao passar o mouse
            */
            <div
              key={index}
              className="group h-full min-h-[540px]
              w-full min-w-0
              bg-white rounded-2xl shadow-md flex flex-col
              hover:shadow-xl transition-all duration-300
              cursor-pointer"
            >

              {/* ================= IMAGEM DO PRODUTO ================= */}

              {/* relative: necessário para posicionar o botão sobre a imagem */}
              <div className="relative overflow-hidden rounded-t-2xl">

                {/* IMAGEM
                   object-cover: evita distorção
                   group-hover:scale-105: pequeno zoom ao passar o mouse
                */}
                <img
                  src={item.img}
                  alt={item.nome}
                  className="h-72 w-full object-cover
                  transition-transform duration-300
                  group-hover:scale-105"
                />

                {/* ================= BOTÃO FLUTUANTE ================= */}

                {/* Gradiente + animação de subida */}
                <div
                  className="
                  absolute inset-0 flex items-end justify-center
                  bg-gradient-to-t from-black/40 to-transparent
                  opacity-0 translate-y-6
                  transition-all duration-300
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  p-4
                  "
                >

                  {/* BOTÃO DE ADICIONAR AO CARRINHO */}
                  <button
                    className="
                    w-full py-3 rounded-xl
                    bg-white text-blue-600 border border-blue-600
                    flex items-center justify-center gap-2
                    text-lg font-semibold
                    shadow-md
                    hover:bg-blue-50
                    active:scale-95
                    transition
                    "
                  >

                    <FaOpencart size={20} />

                    Adicionar ao carrinho

                  </button>

                </div>

              </div>


              {/* ================= TEXTO DO PRODUTO ================= */}

              <div className="flex flex-1 flex-col p-6">

                {/* NOME DO PRODUTO */}
                <h3 className="text-2xl font-semibold text-[#0284C7]">
                  {item.nome}
                </h3>

                {/* DESCRIÇÃO */}
                <p className="mt-2 flex-1 text-gray-600">
                  {item.desc}
                </p>

                {/* RODAPÉ DO CARD */}
                <div className="mt-4 flex items-center justify-between">

                  {/* PREÇO */}
                  <span className="text-2xl font-bold text-[#38BDF8]">
                    {item.preco}
                  </span>

                  {/* LINK DETALHES */}
                  <span className="text-gray-500 hover:text-blue-600 cursor-pointer transition-colors">
                    Ver detalhes
                  </span>

                </div>

              </div>


              {/* ================= BOTÃO MOBILE ================= */}

              {/* Aparece apenas em telas pequenas */}
              <div className="mt-auto flex h-20 w-full items-center justify-center gap-4 rounded-b-2xl bg-[#0284C7] lg:hidden">

                <button className="text-white font-medium">
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