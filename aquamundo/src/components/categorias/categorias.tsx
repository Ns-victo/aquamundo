import peixe_laranja from "../../assets/imagens/peixe_laranja.png";
import racao from "../../assets/imagens/racao.jpg";
import bomba_submersa from "../../assets/imagens/bomba_submersa.jpg";
import decoracao from "../../assets/imagens/decoracao.jpg";

export default function Categorias() {
  return (
    <section className="bg-[#F2F7FB] py-20 lg:py-32">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16">

        {/* ================= CABEÇALHO ================= */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12 lg:mb-20">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2 lg:mb-4">
              Categorias
            </h1>
            <h3 className="text-base sm:text-lg lg:text-2xl text-gray-600">
              Encontre tudo o que precisa para seu aquário
            </h3>
          </div>

          <button className="cursor-pointer text-blue-500 text-base lg:text-xl font-medium flex items-center gap-2 hover:gap-4 transition-all">
            Ver todas →
          </button>
        </div>

        {/* ================= CARDS (SCROLL LATERAL) ================= */}
        <div
          className="
            flex gap-6
            overflow-x-auto
            snap-x snap-mandatory
            touch-pan-x
            pb-6
            lg:overflow-visible
            lg:snap-none
            lg:justify-between
          "
        >

          {/* CARD PADRÃO */}
          {[
            { img: peixe_laranja, title: "Peixes", desc: "Tropicais e ornamentais" },
            { img: racao, title: "Ração", desc: "Nutrição balanceada" },
            { img: bomba_submersa, title: "Equipamentos", desc: "Filtros, bombas e mais" },
            { img: decoracao, title: "Decoração", desc: "Plantas e ornamentos" },
          ].map((item, index) => (
            <div
              key={index}
              className="
                relative group bg-white
                min-w-[90%]
                sm:min-w-[420px]
                lg:min-w-0 lg:w-[520px]
                h-[360px] lg:h-[440px]
                rounded-3xl shadow-lg
                overflow-hidden cursor-pointer
                snap-start flex-shrink-0
              "
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8">
                <h2 className="text-white text-xl lg:text-2xl font-bold">
                  {item.title}
                </h2>
                <p className="text-white text-sm lg:text-lg mt-2 opacity-0 translate-y-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}