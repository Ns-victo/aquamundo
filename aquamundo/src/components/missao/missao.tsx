import peixe_header from "../../assets/imagens/peixe_header.jpeg";

export default function Missao() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 flex flex-col ">
                    <h1 className="text-4xl text-black font-bold mb-8 text-center md:text-left">
                        Nossa Missão
                    </h1>

                    <div className="flex flex-col lg:flex-row gap-10 items-start">
                        <div className="flex-1 flex flex-col gap-6">
                            <p className="text-xl text-gray-500 leading-relaxed text-justify">
                                A AquaMundo nasceu em 2004 com um objetivo simples: ser a loja que todo 
                                aquarista gostaria de ter por perto. Um lugar onde você encontra não só 
                                produtos de qualidade, mas também conhecimento, orientação e uma 
                                comunidade apaixonada pelo mesmo hobby.
                            </p>
                            
                            <p className="text-xl text-gray-500 leading-relaxed text-justify">
                                Acreditamos que cada aquário conta uma história. Seja um nano-aquário 
                                de 20 litros na mesa do escritório ou um aquário de 500 litros no salão 
                                da sua casa, estamos aqui para ajudar a escrever essa história com você.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 mt-4">
                                <div className="bg-blue-100 w-full sm:w-[250px] p-6 rounded-lg flex flex-col justify-center items-center text-center shadow-lg">
                                    <h3 className="font-semibold text-blue-900">+20 anos de experiência</h3>
                                </div>
                                <div className="bg-blue-100 w-full sm:w-[250px] p-6 rounded-lg flex flex-col justify-center items-center text-center shadow-lg">
                                    <h3 className="font-semibold text-blue-900">+15.000 clientes satisfeitos</h3>
                                </div>
                            </div>
                        </div>

                        <img 
                            className="w-full lg:w-[500px] xl:w-[600px] h-[400px] rounded-xl object-cover shadow-2xl" 
                            src={peixe_header} 
                            alt="Peixe ornamental em destaque" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}