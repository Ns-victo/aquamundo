export default function EntrarContato() {
  return (
    /* SEÇÃO DE CHAMADA PARA AÇÃO (CTA):
       - bg-[#0284C7]: Azul oceano vibrante para atrair a atenção.
       - w-full: Ocupa toda a largura disponível.
       - py-16: Espaçamento vertical interno (64px).
       - min-h-[25vh] / md:h-[35vh] / lg:h-[45vh]: Altura dinâmica baseada na altura da tela (Viewport Height), 
         fazendo a seção crescer proporcionalmente em telas maiores.
       - flex items-center: Centraliza o conteúdo verticalmente dentro da seção.
    */
    <section
      className="
        bg-[#0284C7]
        w-full
        py-16 
        min-h-[25vh] md:h-[35vh] lg:h-[45vh]
        flex items-center
      "
    >
      {/* CONTAINER DE CONTEÚDO:
         - max-w-screen-xl: Limita a largura do conteúdo em 1280px.
         - mx-auto: Centraliza o bloco na horizontal.
         - px-4: Padding de segurança lateral para mobile.
      */}
      <div className="w-full max-w-screen-xl h-auto mx-auto px-4">
        
        {/* ESTRUTURA INTERNA:
           - flex flex-col: Organiza título, texto e botão um abaixo do outro.
           - items-center: Centraliza os itens horizontalmente.
           - text-center: Alinha todos os textos ao centro.
           - gap-6: Espaçamento de 24px entre os elementos internos.
        */}
        <div className="flex flex-col items-center text-center gap-6">

          {/* TÍTULO DA CHAMADA:
             - text-2xl a lg:text-6xl: Escalonamento agressivo da fonte para impacto visual no desktop.
             - font-bold: Peso máximo para destaque.
             - text-white: Contraste total sobre o fundo azul.
          */}
          <h2
            className="
              text-2xl sm:text-3xl md:text-4xl lg:text-6xl
              font-bold text-white
            "
          >
            Tem dúvidas sobre seu projeto?
          </h2>

          {/* SUBTÍTULO INFORMATIVO:
             - text-sm a lg:text-2xl: Tamanho de leitura confortável em qualquer dispositivo.
             - max-w-4xl: Limita a largura do texto para que ele não fique com linhas muito longas no desktop.
          */}
          <p
            className="
              text-sm sm:text-base md:text-lg lg:text-2xl
              text-white max-w-4xl
            "
          >
            Nossa equipe de biólogos e especialistas está pronta para ajudar você
            a montar o ecossistema perfeito.
          </p>

          {/* BOTÃO DE CONTATO:
             - bg-white: Fundo branco para se destacar no azul.
             - h-25: Altura personalizada para o botão.
             - cursor-pointer: Indica que o elemento é interativo.
             - px-10 py-4: Padding interno largo para criar um botão encorpado.
             - rounded-full: Estilo "pílula" (bordas totalmente arredondadas).
             - hover:bg-[#EFF6FF]: Muda para um azul muito claro ao passar o mouse.
             - shadow-xl: Sombra intensa para dar efeito de flutuação.
             - transition-colors: Suaviza a troca de cor no hover.
          */}
          <button
            className="
              mt-6 bg-white text-blue-600 font-semibold
              h-25
              cursor-pointer
              px-10 py-4 rounded-full
              text-sm md:text-lg lg:text-xl
              hover:bg-[#EFF6FF] transition-colors
              shadow-xl
            "
          >
            Fale com Especialista
          </button>

        </div>
      </div>
    </section>
  );
}