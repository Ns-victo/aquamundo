import { PiWhatsappLogoThin } from "react-icons/pi";
import {  MdOutlineEmail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";

const contatos = [
  {
    icon: PiWhatsappLogoThin,
    titulo: "WhatsApp",
    linha1: "(11) 99999-9999",
    linha2: "Seg-Sex, 9h às 18h",
  },
  {
    icon: MdOutlineEmail,
    titulo: "E-mail",
    linha1: "Contato@contato.com",
    linha2: "Resposta em até 24h",
  },
  {
    icon: FiMapPin,
    titulo: "Loja Física",
    linha1: "Av. Paulista, 1000",
    linha2: "São Paulo, Sp - Brasil",
  },
];

export default function InfoContato() {
  return (
    <section className="w-full flex flex-col items-center gap-8 p-10">
      <div className="text-center max-w-xl">
        {/* Titulo */}
        <h2 className="text-2xl font-bold">Informações do Contato</h2>
        <p className="text-gray-600 mt-2">
          Prefere conversar diretamente? Use um dos canais abaixo ou nos visite em nossa loja física.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-6 w-full max-w-xl">
        {contatos.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 flex gap-4 items-start shadow-sm hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="bg-blue-100 p-3 rounded-full">
                <Icon className="text-blue-500 text-xl" />
              </div>

              <div className="gap-3">
                <h3 className="text-xl font-semibold text-gray-600">{item.titulo}</h3>
                <p className="text-sm text-gray-600">{item.linha1}</p>
                <span className="text-sm text-gray-400">{item.linha2}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}