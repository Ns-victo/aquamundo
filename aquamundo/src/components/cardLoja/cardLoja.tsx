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
    <section className="py-16 overflow-x-hidden">
      <div className="mx-auto px-4">

        {/* GRID DOS CARDS */}
        <div className="flex flex-wrap gap-8 justify-center lg:grid lg:grid-cols-2">

          {produtos.map((item, index) => (

            <div
              key={index}
              className="group w-[300px] bg-white rounded-2xl shadow-md flex flex-col
              hover:shadow-xl transition-all duration-300 cursor-pointer"
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

              {/* TEXTO */}
              <div className="p-6 flex flex-col flex-1">

                <h3 className="text-xl font-semibold text-[#0284C7]">
                  {item.nome}
                </h3>

                <p className="text-gray-600 mt-2 flex-1">
                  {item.desc}
                </p>

                <div className="mt-4 flex items-center justify-between">

                  <span className="text-2xl font-bold text-[#38BDF8]">
                    {item.preco}
                  </span>

                  <span className="text-gray-500 hover:text-blue-600 cursor-pointer transition-colors">
                    Ver detalhes
                  </span>

                </div>

              </div>

              {/* BOTÃO MOBILE */}
              <div className="bg-[#0284C7] w-full h-16 flex items-center justify-center gap-3 rounded-b-2xl lg:hidden">

                <button className="text-white font-medium">
                  Adicionar ao Carrinho
                </button>

                <FaOpencart className="text-white" size={20} />

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}