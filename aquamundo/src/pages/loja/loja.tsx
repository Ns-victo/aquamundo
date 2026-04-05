import CardFiltros from "../../components/cardfiltros/cardfiltros";
import CampoBuscar from "../../components/campobuscar/campobuscar";
import CardLoja from "../../components/cardLoja/cardLoja";

export default function Loja() {
  return (
    /* TELA PRINCIPAL DA LOJA:
       - flex flex-col: Empilha hero, filtros e grade de produtos verticalmente.
       - items-center: Mantem o conteudo centralizado dentro da largura da pagina.
       - w-full: Garante ocupacao integral da viewport horizontal.
    */
    <div className="flex w-full flex-col items-center justify-start">

      {/* HERO INSTITUCIONAL DA LOJA:
          - bg-[#0B3C5D]: Fundo azul escuro para destacar a abertura da pagina.
          - min-h responsivo: Ajusta impacto visual entre mobile e desktop.
          - text-center: Centraliza a mensagem principal para leitura rapida.
      */}
      <section className="flex min-h-[260px] w-full items-center justify-center bg-[#0B3C5D] px-6 py-12 sm:min-h-[320px] sm:px-10">
        <div className="max-w-6xl text-center text-white">
          <h4 className="text-base font-bold leading-relaxed sm:text-lg lg:text-xl">
            Explore nossa seleção curada de peixes, corais, equipamentos e muito mais para seu aquário.
          </h4>
        </div>
      </section>

      {/* ÁREA OPERACIONAL DA LOJA:
          - max-w-6xl: Mantem filtros e vitrine alinhados ao grid principal do site.
          - flex-col / lg:flex-row: Empilha no mobile e divide em colunas no desktop.
          - gap-6: Cria respiro entre filtros, busca e cards de produto.
      */}
      <div className="mt-8 flex w-full max-w-6xl flex-col gap-6 px-4 pb-12 sm:px-6 lg:mt-10 lg:flex-row lg:items-start lg:px-8">

        {/* COLUNA DE FILTROS:
            - flex-shrink-0 no desktop: Impede que o painel de filtros colapse quando a grade cresce.
        */}
        <div className="w-full lg:w-auto lg:flex-shrink-0">
          <CardFiltros />

        </div>

        {/* COLUNA DE RESULTADOS:
            - flex-1: Faz busca e vitrine ocuparem o espaco restante.
            - min-w-0: Evita overflow horizontal em layouts flexiveis.
        */}
        <div className="flex min-w-0 flex-1 flex-col gap-6">
          <CampoBuscar />

          <CardLoja />
        </div>
      </div>
    </div>
  );
}