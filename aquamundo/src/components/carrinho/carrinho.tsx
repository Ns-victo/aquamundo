import { FaOpencart, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useCarrinho } from "../../context/carrinhoContext";

export default function Carrinho() {
  const { itensCarrinho, removerItem, limparCarrinho } = useCarrinho();

  const subtotal = itensCarrinho.reduce(
    (total, item) => total + item.preco * item.quantidade,
    0,
  );

  return (
    /* TELA OPERACIONAL DO CARRINHO:
       - flex flex-col: Organiza hero, lista de itens e resumo verticalmente.
       - items-center: Centraliza a estrutura principal na pagina.
       - w-full: Mantem seções fluidas e de largura total quando necessario.
    */
    <div className="flex w-full flex-col items-center justify-start">

      {/* HERO DO CARRINHO:
          - bg-[#0B3C5D]: Destaca a abertura da pagina com o mesmo padrao institucional.
          - min-h responsivo: Preserva hierarquia visual em diferentes tamanhos de tela.
          - text-center: Centraliza titulo e subtitulo para leitura imediata.
      */}
      <section className="flex min-h-[260px] w-full items-center justify-center bg-[#0B3C5D] px-6 py-12 sm:min-h-[320px] sm:px-10">
        <div className="max-w-4xl text-center text-white">
          <h1 className="text-3xl font-bold sm:text-4xl">Seu carrinho</h1>
          <p className="mt-4 text-base leading-relaxed sm:text-lg">
            Revise os produtos selecionados antes de finalizar sua compra na Aqua Mundo.
          </p>
        </div>
      </section>

      {/* ÁREA PRINCIPAL DO CARRINHO:
          - max-w-7xl: Mantem lista e resumo alinhados ao grid global.
          - flex-col / lg:flex-row: Empilha no mobile e separa em colunas no desktop.
          - gap-8: Cria respiracao entre a lista de produtos e o resumo financeiro.
      */}
      <section className="flex w-full max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-start lg:px-8 lg:py-14">

        {/* LISTA DE ITENS:
            - flex-1: Faz a listagem ocupar a maior parte do espaco disponivel.
            - gap-5: Separa visualmente cada card de produto.
        */}
        <div className="flex min-w-0 flex-1 flex-col gap-5">
          {itensCarrinho.length === 0 ? (

            /* ESTADO VAZIO:
               - border-dashed: Diferencia visualmente um estado informativo de um card comum.
               - text-center: Direciona foco para a mensagem e CTA de retorno a loja.
            */
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center shadow-sm">
              <h2 className="text-2xl font-bold text-[#0B3C5D]">Seu carrinho esta vazio</h2>
              <p className="mt-3 text-base text-gray-600">
                Adicione produtos na loja para visualizar seus itens aqui.
              </p>
              <Link
                to="/loja"
                className="mt-6 inline-flex rounded-full bg-[#0284C7] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#0B3C5D]"
              >
                Ir para a loja
              </Link>
            </div>
          ) : (
            itensCarrinho.map(item => (

              /* CARD DE PRODUTO NO CARRINHO:
                 - sm:flex-row: Em telas maiores separa informacoes do bloco de preco/acao.
                 - rounded-2xl + shadow-sm: Mantem o padrao de card do restante do site.
              */
              <article
                key={item.id}
                className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={item.img}
                    alt={item.nome}
                    className="h-20 w-20 rounded-2xl object-cover"
                  />

                  <div className="max-w-2xl">
                    <h2 className="text-xl font-semibold text-[#0B3C5D]">{item.nome}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:items-end">
                  <div className="text-sm text-gray-500">Quantidade: {item.quantidade}</div>
                  <div className="text-2xl font-bold text-[#0284C7]">
                    {(item.preco * item.quantidade).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </div>
                  <button
                    type="button"
                    onClick={() => removerItem(item.id)}
                    className="flex items-center gap-2 text-sm font-semibold text-red-500 transition-colors hover:text-red-600"
                  >
                    <FaTrash size={14} />
                    Remover item
                  </button>
                </div>
              </article>
            ))
          )}
        </div>

        {/* RESUMO FINANCEIRO:
            - lg:sticky lg:top-32: Mantem o resumo visivel durante a rolagem no desktop.
            - bg-[#F8FBFD]: Cria contraste suave em relacao aos cards brancos de produto.
            - max-w-sm: Controla a largura para preservar leitura dos valores.
        */}
        <aside className="w-full rounded-2xl border border-gray-200 bg-[#F8FBFD] p-6 shadow-sm lg:sticky lg:top-32 lg:max-w-sm">
          <h2 className="text-2xl font-bold text-[#0B3C5D]">Resumo do pedido</h2>

          <div className="mt-6 space-y-4 text-base text-gray-700">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>
                {subtotal.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Entrega</span>
              <span>Gratis</span>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4 text-lg font-bold text-[#0B3C5D]">
              <span>Total</span>
              <span>
                {subtotal.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
          </div>

          <button className="mt-8 w-full rounded-full bg-[#0284C7] px-6 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#0B3C5D]">
            Finalizar compra
          </button>

          <Link
            to="/loja"
            className="mt-4 flex w-full items-center justify-center rounded-full border border-[#0284C7] px-6 py-4 text-lg font-semibold text-[#0284C7] transition-colors hover:bg-blue-50"
          >
            Continuar comprando
          </Link>

          {itensCarrinho.length > 0 && (
            <button
              type="button"
              onClick={limparCarrinho}
              className="mt-4 w-full text-sm font-semibold text-red-500 transition-colors hover:text-red-600"
            >
              Limpar carrinho
            </button>
          )}
        </aside>
      </section>
    </div>
  );
}