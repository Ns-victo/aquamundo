



import Missao from "../missao/missao";

export default function SobreNos() {
    return (
        /* ESTRUTURA PRINCIPAL DA TELA SOBRE NÓS:
           - flex flex-col: Organiza apresentacao institucional e bloco de missao em sequencia.
           - items-center: Mantem o conteudo centralizado na largura da pagina.
           - w-full: Permite que a faixa introdutoria ocupe toda a horizontal.
        */
        <div className="w-full flex flex-col items-center justify-center">

            {/* HERO INSTITUCIONAL:
                - bg-[#0B3C5D]: Mantem consistencia visual com outras paginas internas.
                - min-h-[350px]: Garante peso visual suficiente para o texto de abertura.
                - text-center + max-w-4xl: Melhora a leitura do texto longo.
            */}
            <section className="w-full min-h-[350px] bg-[#0B3C5D] flex items-center justify-center p-10">
                <div className="max-w-4xl text-center">

                    {/* TEXTO DESCRITIVO:
                        - text-lg: Mantem leitura confortavel para o bloco institucional.
                        - text-white: Cria contraste forte sobre o fundo escuro.
                        - mt-10: Abre respiro vertical dentro do hero.
                    */}
                    <p className="text-lg text-white mt-10">
                        Bem-vindo à Aquamundo, a sua loja de produtos para aquários! Somos apaixonados por aquarismo e estamos aqui para fornecer tudo o que você precisa para criar um ambiente aquático saudável e bonito. Nossa missão é oferecer produtos de alta qualidade, atendimento excepcional e uma experiência de compra agradável para todos os amantes de aquários. Seja você um iniciante ou um aquarista experiente, estamos aqui para ajudar a tornar seu hobby ainda mais gratificante.
                    </p>
                </div>
                
            </section>

            {/* BLOCO DE MISSÃO:
                - mt-10: Separa a introducao institucional do restante do conteudo.
                - Renderiza o componente que aprofunda valores e proposito da marca.
            */}
            <div className="mt-10">
                <Missao />
            </div>
            

        </div>
        
    );
}