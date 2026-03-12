import header_foto from "../../assets/imagens/peixe_azul.jpg";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaBox, FaLifeRing, FaClock } from "react-icons/fa";

export default function Layout() {
  return (
    <div className="w-full relative">
      
      {/* Imagem de fundo - Ajustada a altura para mobile */}
      <div className="relative h-auto sm:h-full">
        <img
          src={header_foto}
          alt="Imagem de cabeçalho"
          className="w-full h-full object-cover "
        />
        
        {/* Overlay escuro para melhorar leitura no mobile */}
        <div className="absolute inset-0 bg-black/30 sm:bg-transparent"></div>

        {/* Conteúdo central - Agora visível em todos os tamanhos */}
        <div
          className="
            absolute inset-0
            flex flex-col justify-center items-center
            text-center w-full px-6
          "
        >
          <h2 className="text-white text-3xl sm:text-5xl font-bold mb-4 italic leading-tight hidden sm:block font-playfair">
            Traga o equilíbrio e a vida da água doce para seu espaço!
          </h2>

          <h3 className="text-white text-lg sm:text-xl font-medium max-w-3xl mx-auto hidden sm:block font-lato">
            Especialistas em aquarismo de alta performance. Peixes de água doce,
            ecossistemas equilibrados e equipamentos de última geração.
          </h3>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto ">
            <button
              className="
                cursor-pointer bg-transparent font-lato hover:bg-[#5ca2b5]
                text-white font-bold py-3 px-6 rounded-full
                transition-colors border border-white
                text-xl sm:text-2xl w-full sm:w-60
                hidden sm:block
              "
            >
              Explorar Loja
            </button>

            <button
              className="
                cursor-pointer bg-transparent font-lato hover:bg-[#5ca2b5]
                text-white font-bold py-3 px-6 rounded-full
                transition-colors border border-white
                text-xl sm:text-2xl w-full sm:w-60
                hidden sm:block
              "
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </div>

      {/* Seção de Cards - Ajustado overflow e largura */}
      <div
        className="
          mt-10 sm:mt-20 mb-24
          flex flex-row
          gap-6
          overflow-x-auto
          px-6
          snap-x snap-mandatory
          scrollbar-hide
          lg:justify-center /* Centraliza apenas quando houver espaço */
        "
      >
        {/* Card Component (Padrão para os 4) */}
        {[
          { icon: <MdOutlineWorkspacePremium />, title: "Qualidade Premium", text: "Oferecemos uma seleção premium de peixes de água doce, plantas e equipamentos de última geração." },
          { icon: <FaBox />, title: "Entrega Segura", text: "Utilizamos embalagens adequadas para o transporte seguro, preservando integridade e bem-estar." },
          { icon: <FaLifeRing />, title: "Garantia de Vida", text: "Garantimos a procedência e a qualidade dos peixes, assegurando vida saudável no recebimento." },
          { icon: <FaClock />, title: "Suporte 24 Horas", text: "Suporte especializado 24 horas para orientar cuidados e tirar dúvidas em todas as etapas." }
        ].map((card, index) => (
          <div
            key={index}
            className="
              bg-white shadow-xl rounded-lg
              flex flex-col items-center
              transition-transform duration-300
              hover:scale-105
              min-w-[85%] sm:min-w-[350px] max-w-sm
              snap-center p-6 mb-4
            "
          >
            <div className="border border-[#87CEEB] rounded-full w-16 h-16 sm:w-20 h-20 flex items-center justify-center">
              <span className="text-3xl sm:text-4xl text-[#87CEEB]">{card.icon}</span>
            </div>

            <h2 className="text-xl sm:text-2xl text-[#273f59] font-bold mt-4 text-center">
              {card.title}
            </h2>

            <p className="text-base sm:text-lg mt-2 text-center text-gray-600">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}