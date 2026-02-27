import header_foto from "../../assets/imagens/peixe_azul.jpg";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaBox, FaLifeRing, FaClock } from "react-icons/fa";

export default function Layout() {
  return (
    <div className="w-full relative">
      
      {/* Imagem de fundo */}
      <img
        src={header_foto}
        alt="Imagem de cabeçalho"
        className="w-full h-full object-cover"
      />

      {/* Conteúdo central (desktop apenas) */}
      <div
        className="
          absolute inset-0
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          text-center w-full px-4
          hidden sm:block
        "
      >
        <h2 className="text-white text-5xl font-bold mb-4 italic">
          Traga o equilíbrio e a vida da água doce para seu espaço!
        </h2>

        <h3 className="text-white text-xl font-medium max-w-3xl mx-auto">
          Especialistas em aquarismo de alta performance. Peixes de água doce,
          ecossistemas equilibrados e equipamentos de última geração para o seu aquário
        </h3>

        <div className="mt-10 flex justify-center gap-4">
          <button
            className="
              cursor-pointer bg-transparent
              hover:bg-[#5ca2b5]
              text-white font-bold
              py-3 px-6 rounded-full
              transition-colors
              border border-white
              text-2xl w-60
            "
          >
            Explorar Loja
          </button>

          <button
            className="
              cursor-pointer bg-transparent
              hover:bg-[#5ca2b5]
              text-white font-bold
              py-3 px-6 rounded-full
              transition-colors
              border border-white
              text-2xl w-60
            "
          >
            Fale Conosco
          </button>
        </div>
      </div>

      {/* Seção de Cards */}
      <div
        className="
         mt-20 mb-24
    flex flex-row
    gap-6
    overflow-x-auto
    overflow-y-hidden
    px-4
    snap-x snap-mandatory
    touch-pan-x
    scrollbar-hide
    justify-center
    items-center
          
        "
      >

        {/* Card 1 */}
        <div
          className="
            bg-white shadow-xl rounded-lg
            flex flex-col items-center
            cursor-pointer
            transition-transform duration-300
            hover:scale-105
            max-w-sm min-w-[380px]
            snap-center
            
          "
        >
          <div className="border border-[#87CEEB] rounded-full w-20 h-20 flex items-center justify-center mt-6">
            <MdOutlineWorkspacePremium className="w-10 h-10 text-[#87CEEB]" />
          </div>

          <h2 className="text-2xl text-[#273f59] font-bold mt-4">
            Qualidade Premium
          </h2>

          <p className="text-lg mt-2 text-center p-5">
            Oferecemos uma seleção premium de peixes de água doce, plantas aquáticas e
            equipamentos de última geração para garantir um ecossistema equilibrado e saudável.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="
            bg-white shadow-xl rounded-lg
            flex flex-col items-center
            cursor-pointer
            transition-transform duration-300
            hover:scale-105
            max-w-sm min-w-[380px]
            snap-center
          "
        >
          <div className="border border-[#87CEEB] rounded-full w-20 h-20 flex items-center justify-center mt-6">
            <FaBox className="w-10 h-10 text-[#87CEEB]" />
          </div>

          <h2 className="text-2xl text-[#273f59] font-bold mt-4">
            Entrega Segura
          </h2>

          <p className="text-lg mt-2 text-center p-5">
            Utilizamos embalagens adequadas para o transporte seguro de peixes, plantas aquáticas e
            equipamentos, preservando sua integridade e bem-estar.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="
            bg-white shadow-xl rounded-lg
            flex flex-col items-center
            cursor-pointer
            transition-transform duration-300
            hover:scale-105
            max-w-sm min-w-[380px]
            snap-center
          "
        >
          <div className="border border-[#87CEEB] rounded-full w-20 h-20 flex items-center justify-center mt-6">
            <FaLifeRing className="w-10 h-10 text-[#87CEEB]" />
          </div>

          <h2 className="text-2xl text-[#273f59] font-bold mt-4">
            Garantia de Vida
          </h2>

          <p className="text-lg mt-2 text-center p-5">
            Garantimos a procedência e a qualidade dos peixes, assegurando vida saudável no
            recebimento e total transparência em todo o processo.
          </p>
        </div>

        {/* Card 4 */}
        <div
          className="
            bg-white shadow-xl rounded-lg
            flex flex-col items-center
            cursor-pointer
            transition-transform duration-300
            hover:scale-105
            max-w-sm min-w-[380px]
            snap-center
          "
        >
          <div className="border border-[#87CEEB] rounded-full w-20 h-20 flex items-center justify-center mt-6">
            <FaClock className="w-10 h-10 text-[#87CEEB]" />
          </div>

          <h2 className="text-2xl text-[#273f59] font-bold mt-4">
            Suporte 24 Horas
          </h2>

          <p className="text-lg mt-2 text-center p-5">
            Suporte especializado 24 horas para orientar cuidados, tirar dúvidas e acompanhar
            você em todas as etapas do aquarismo.
          </p>
        </div>

      </div>
    </div>
  );
}