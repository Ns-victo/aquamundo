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
    /* COLUNA DE INFORMAÇÕES DE CONTATO:
       - flex flex-col: Organiza cabecalho e lista de canais verticalmente.
       - items-center: Mantem o bloco centralizado dentro da coluna.
       - espacamento responsivo: Ajusta respiro entre mobile e desktop.
    */
    <section className="w-full flex flex-col items-center gap-6 sm:gap-8 px-0 py-2 sm:p-4 lg:p-6">

      {/* CABEÇALHO EXPLICATIVO:
          - text-center: Facilita leitura do titulo e subtitulo.
          - max-w-xl: Evita linhas longas demais em telas maiores.
      */}
      <div className="text-center max-w-xl px-2">
        {/* TÍTULO E TEXTO DE APOIO:
            - Escala tipografica responsiva para manter hierarquia clara.
            - leading-relaxed melhora a leitura do texto introdutorio.
        */}
        <h2 className="text-2xl sm:text-3xl font-bold">Informações do Contato</h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
          Prefere conversar diretamente? Use um dos canais abaixo ou nos visite em nossa loja física.
        </p>
      </div>

      {/* LISTA DE CANAIS:
          - max-w-xl: Mantem os cards compactos e legiveis.
          - gap-6: Cria separacao clara entre cada metodo de contato.
      */}
      <div className="flex flex-col gap-6 w-full max-w-xl">
        {contatos.map((item, index) => {
          const Icon = item.icon;

          return (

            /* CARD DE CONTATO:
               - hover:scale-105: Fornece feedback visual leve ao usuario.
               - p responsivo: Garante conforto visual em telas menores.
               - items-start: Mantem icone e textos alinhados pelo topo.
            */
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 flex gap-4 items-start shadow-sm hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="bg-blue-100 p-3 rounded-full shrink-0">
                <Icon className="text-blue-500 text-xl sm:text-2xl" />
              </div>

              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-600">{item.titulo}</h3>
                <p className="text-sm text-gray-600">{item.linha1}</p>
                <span className="text-sm text-gray-400 break-words">{item.linha2}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}