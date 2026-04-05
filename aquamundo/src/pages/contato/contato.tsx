import InfoContato from "../../components/infocontato/infocontatos";
import EnviarMensagem from "../../components/enviarmensagem/enviarmensagem";

export default function Contato() {
    return (
        /* TELA PRINCIPAL DE CONTATO:
           - flex flex-col: Organiza hero e area de contato em pilha vertical.
           - items-center: Mantem os blocos alinhados ao centro da pagina.
           - w-full: Permite que secoes de largura total ocupem toda a tela.
        */
        <div className="w-full flex flex-col items-center justify-center">

            {/* HERO DE CONTATO:
                - bg-[#0B3C5D]: Cria uma faixa institucional consistente com outras paginas.
                - min-h responsivo: Mantem presenca visual sem exagerar no mobile.
                - text-center: Facilita leitura imediata da chamada principal.
            */}
            <section className="w-full min-h-[260px] sm:min-h-[350px] bg-[#0B3C5D] flex items-center justify-center px-6 py-12 sm:p-10">
                <div className="text-white text-center max-w-6xl">
                    <h4 className="text-lg sm:text-xl font-bold leading-relaxed">
                        Entre em contato com nossos especialistas.
                    </h4>

                </div>
            </section>

            {/* ÁREA DE CONTEÚDO DE CONTATO:
                - grid responsivo: Empilha no mobile e divide informacoes / formulario no desktop.
                - max-w-7xl: Limita a largura para conforto visual.
                - justify-items-stretch: Faz cada coluna ocupar sua largura disponivel.
            */}
            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 items-start justify-items-stretch gap-8 px-4 py-8 sm:px-6 lg:gap-10 lg:px-8 lg:py-10 mx-auto">
                <InfoContato/>
                <EnviarMensagem/>

            </div>
            
        </div>
    );
}