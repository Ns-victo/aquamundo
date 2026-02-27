import { LuFish } from "react-icons/lu";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#0f1729] text-white">
      
      {/* Conteúdo */}
      <div
        className="
          max-w-screen-xl mx-auto
          px-4 py-12
          flex flex-col md:flex-row
          gap-12 justify-between
        "
      >

        {/* Coluna 1: Logo e descrição */}
        <div className="flex flex-col gap-4 md:max-w-md">
          <div className="flex items-center gap-3">
            <LuFish className="text-[#5ca2b5]" size={38} />
            <h1 className="text-3xl md:text-4xl font-bold text-[#5ca2b5]">
              Aquamundo
            </h1>
          </div>

          <p className="text-sm md:text-lg text-gray-200 leading-relaxed">
            Sua loja completa de aquarismo. Trazendo a beleza dos oceanos e
            rios para dentro da sua casa com responsabilidade e paixão.
          </p>
        </div>

        {/* Coluna 2: Navegação */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-bold text-[#5ca2b5]">
            Navegação
          </h2>

          <ul className="flex flex-col gap-3 text-sm md:text-lg">
            {["Loja", "Sobre nós", "Contato", "Carrinho"].map((item) => (
              <li key={item}>
                <a className="hover:text-[#5ca2b5] transition-colors cursor-pointer">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 3: Contatos */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-bold text-[#5ca2b5]">
            Contatos
          </h2>

          <div className="flex items-center gap-3 text-sm md:text-lg">
            <FaWhatsapp size={22} />
            <span className="hover:text-[#5ca2b5] transition-colors cursor-pointer">
              11 99999-9999
            </span>
          </div>

          <div className="flex items-center gap-3 text-sm md:text-lg">
            <FiMapPin size={22} />
            <span className="hover:text-[#5ca2b5] transition-colors cursor-pointer">
              Av. Paulista, 1000
            </span>
          </div>

          <div className="flex items-center gap-3 text-sm md:text-lg break-all">
            <MdOutlineAlternateEmail size={22} />
            <span className="hover:text-[#5ca2b5] transition-colors cursor-pointer">
              contato@aquamundo.com
            </span>
          </div>
        </div>

      </div>

      {/* Linha divisória */}
      <div className="w-full h-px bg-white/10" />

      {/* Copyright */}
      <p className="text-center text-gray-400 text-xs md:text-base py-4">
        © 2024 AquaMundo. Todos os direitos reservados.
      </p>

    </footer>
  );
}