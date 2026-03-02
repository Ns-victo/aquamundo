import peixe_laranja from "../../assets/imagens/peixe_laranja.png";
import racao from "../../assets/imagens/racao.jpg";
import bomba_submersa from "../../assets/imagens/bomba_submersa.jpg";
import decoracao from "../../assets/imagens/decoracao.jpg";

export default function Categorias() {
  return (
    /* SEÇÃO PRINCIPAL:
       - bg-[#F2F7FB]: Cor de fundo personalizada azul claro.
       - py-16: Padding vertical no mobile (64px).
       - lg:py-24: Aumenta o padding para desktop (96px).
    */
    <section className="bg-[#F2F7FB] py-16 lg:py-24">
      
      {/* DIV CONTAINER:
       - max-w-[1400px]: Largura máxima para evitar que o conteúdo estique em monitores ultra-wide.
       - mx-auto: Centraliza o container horizontalmente distribuindo as margens.
       - px-4 sm:px-6 lg:px-12: Padding horizontal responsivo para evitar que o conteúdo toque as bordas da tela.
      */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* ================= CABEÇALHO ================= */}
        {/* Estrutura de Título e Botão
          - flex flex-col: Empilha os itens verticalmente no mobile.
          - lg:flex-row: Alinha os itens lado a lado em telas grandes.
          - items-start: Alinha os itens à esquerda no mobile.
          - lg:items-center: Centraliza verticalmente os itens no desktop.
          - justify-between: Empurra o título para a esquerda e o botão para a direita.
          - gap-4: Espaçamento de 16px entre os elementos.
          - mb-10 lg:mb-16: Margem inferior que separa o cabeçalho dos cards.
        */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-10 lg:mb-16">
          
          <div>
            {/* Estilização de Texto
              - text-3xl lg:text-5xl: Escala o tamanho do título conforme o dispositivo.
              - font-bold: Aplica peso negrito para destaque.
              - mb-2: Pequeno espaço entre o título e o subtítulo.
              - text-sm lg:text-xl: Tamanho da fonte do subtítulo responsivo.
              - text-gray-600: Tom cinza para criar hierarquia visual.
            */}
            <h1 className="text-3xl lg:text-5xl font-bold mb-2">
              Categorias
            </h1>
            <h3 className="text-sm lg:text-xl text-gray-600">
              Encontre tudo o que precisa para seu aquário
            </h3>
          </div>

          {/* BOTÃO "VER TODAS":
            - cursor-pointer: Garante que o ícone do mouse mude para a "mãozinha", indicando que o elemento é clicável.
            - text-blue-500: Define a cor do texto e da seta como um tom de azul vibrante.
            - text-sm: Define o tamanho da fonte como 14px no mobile, mantendo a proporção com o título menor.
            - lg:text-lg: Aumenta a fonte para 18px em telas grandes para manter a legibilidade em monitores.
            - font-medium: Aplica um peso de fonte intermediário (500), nem tão fino, nem tão grosso quanto o título.
            - flex items-center: Transforma o botão em um container flexível para alinhar o texto e a seta horizontalmente.
            - gap-2: Cria um espaço inicial de 8px entre o texto "Ver todas" e a seta "→".
            - hover:gap-3: Micro-interação que aumenta o espaço para 12px quando o usuário passa o mouse, fazendo a seta "empurrar" para a direita.
            - transition-all: Faz com que a mudança do gap e de qualquer outra cor seja suave (animada) em vez de instantânea.
        */}

          <button className="cursor-pointer  text-blue-500 text-2xl sm:text-2xl font-medium flex items-center gap-2 hover:gap-3 transition-all">
            Ver todas →
          </button>
        </div>

        {/* ================= CONTAINER DE CARDS ================= */}
        {/* Lógica de Layout e Scroll
          - flex flex-row: Mantém os cards em linha horizontal por padrão.
          - overflow-x-auto: Ativa a rolagem lateral no mobile.
          - snap-x snap-mandatory: Faz o card "travar" no centro da tela ao deslizar.
          - lg:flex-wrap: No desktop, permite que os cards quebrem linha se necessário.
          - lg:justify-center: Centraliza o bloco de cards no desktop.
          - scrollbar-hide: Mantém a interface limpa escondendo a barra de rolagem.
        */}
        <div className="flex flex-row overflow-x-auto snap-x snap-mandatory pb-8 gap-4
             lg:flex-wrap lg:overflow-visible lg:justify-center lg:pb-0 lg:gap-8
             scrollbar-hide">

            {/* MÉTODO .MAP():
             - item: Representa o objeto atual da lista (ex: o peixe, a ração, etc.).
             - index: É a posição numérica de cada item (0, 1, 2, 3...).
             - Função: Ele lê o Array de objetos e para cada um deles "desenha" um Card na tela.
             - Vantagem: Facilita a manutenção. Se você quiser adicionar uma 5ª categoria, 
               basta adicionar um novo objeto ao Array e o React criará o card sozinho.
          */}

          {/* KEY={INDEX}:
             - O React precisa de uma "identidade única" para cada item da lista. 
             - Isso ajuda o motor do React a saber exatamente qual item mudar se algo for alterado, 
               melhorando a performance de renderização.
        */}
          
          {[
            { img: peixe_laranja, title: "Peixes", desc: "Tropicais e ornamentais" },
            { img: racao, title: "Ração", desc: "Nutrição balanceada" },
            { img: bomba_submersa, title: "Equipamentos", desc: "Filtros e bombas" },
            { img: decoracao, title: "Decoração", desc: "Plantas e rochas" },
          ].map((item, index) => (
            /* Aqui o código usa item.img, item.title e item.desc para preencher o card */
            /* CARD INDIVIDUAL
               - relative: Permite posicionar o degradê e textos sobre a imagem.
               - group: Permite que elementos filhos reajam ao hover neste card.
               - min-w-[240px] / lg:w-[300px]: Define tamanhos fixos para manter a proporção.
               - shadow-md hover:shadow-xl: Aumenta a sombra ao interagir.
               - hover:-translate-y-1: Efeito de "levante" ao passar o mouse.
            */
            <div
              key={index}
              className="
                relative group bg-white
                min-w-[240px] h-[300px]
                lg:min-w-[280px] lg:w-[300px] lg:h-[380px]
                rounded-2xl shadow-md overflow-hidden cursor-pointer
                snap-center flex-shrink-0
                transition-all duration-300 hover:shadow-xl hover:-translate-y-1
              "
            >
              {/* IMAGEM DO CARD
                  - object-cover: Garante que a imagem preencha o card sem distorcer.
                  - transition-transform duration-500: Suaviza o zoom.
                  - group-hover:scale-110: Aplica zoom na imagem quando o mouse entra no card.
              */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* OVERLAY (DEGRADÊ)
                  - absolute inset-0: Cobre todo o espaço do card.
                  - bg-gradient-to-t: Cria um degradê de baixo para cima.
                  - from-black/80: Começa com preto semi-transparente na base para dar leitura ao texto.
              */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* TEXTO DO CARD
                  - absolute bottom-0: Fixa o conteúdo na base do card.
                  - p-5 lg:p-6: Espaçamento interno responsivo.
              */}
              <div className="absolute bottom-0 left-0 w-full p-5 lg:p-6">
                <h2 className="text-white text-lg lg:text-xl font-bold">
                  {item.title}
                </h2>
                
                {/* DESCRIÇÃO ANIMADA
                    - opacity-0: Escondida por padrão.
                    - translate-y-4: Posicionada levemente abaixo.
                    - group-hover:opacity-100 / translate-y-0: Torna visível e move para a posição correta no hover.
                */}
                <p className="text-white text-xs lg:text-sm mt-1 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}