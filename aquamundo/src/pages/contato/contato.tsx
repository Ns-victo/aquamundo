import InfoContato from "../../components/infocontato/infocontatos";
import EnviarMensagem from "../../components/enviarmensagem/enviarmensagem";

export default function Contato() {
    return (
        <div className="w-full flex flex-col items-center justify-center">

            {/*Seção azul com texto*/}
            <section className="w-full min-h-[350px] bg-[#0B3C5D] flex items-center justify-center p-10 ">
                <div className="text-white text-center max-w-6xl">
                    <h4 className="text-xl font-bold">
                        Entre em contato com nossos especialistas.
                    </h4>

                </div>
            </section>
            <div className="w-full grid grid-cols-2 items-center justify-center gap-10 p-10">
                <InfoContato/>
                <EnviarMensagem/>

            </div>
            
        </div>
    );
}