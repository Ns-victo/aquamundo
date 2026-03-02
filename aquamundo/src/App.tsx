import Header from "./components/header/header"
import Layout from "./components/layout/layout"
import Categorias from "./components/categorias/categorias"
import DestaquesSemana from "./components/destaques/destaquesSemana"
import Entrarcontato from "./components/entrarcontato/entrarcontato"
import Footer from "./components/footer/footer"

/* PALETA DE CORES DO PROJETO (Referência):
   - #e7f0ed: Verde menta claríssimo (Fundo)
   - #273f59: Azul petróleo (Textos escuros)
   - #5ca2b5: Azul turquesa (Destaques e Ícones)
   - #76b698: Verde suave (Acentos)
*/

function App() {

  return (
    /* WRAPPER PRINCIPAL:
       - min-h-screen: Garante que o site ocupe no mínimo a altura total da tela, 
         evitando que o footer suba em telas muito grandes.
       - flex flex-col: Organiza Header, Main e Footer em uma coluna vertical.
       - bg-white: Cor de fundo base da página.
       - overflow-x-hidden: Trava de segurança para impedir qualquer scroll lateral indesejado 
         que possa quebrar o layout no mobile.
    */
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden ">

      {/* COMPONENTE DE CABEÇALHO:
          Fica fixo no topo e gerencia a navegação principal.
      */}
      <Header />

      {/* ÁREA DE CONTEÚDO PRINCIPAL:
          - main: Tag semântica importante para SEO e acessibilidade.
          - flex-1: Faz com que o conteúdo principal "empurre" o footer para o final da página, 
            mesmo que haja pouco texto.
          - w-full: Garante que as seções ocupem 100% da largura disponível.
      */}
      <main className="flex-1 w-full">
        {/* Seção Hero e Benefícios */}
        <Layout />
        
        {/* Navegação por tipos de produtos */}
        <Categorias />
        
        {/* Vitrine de produtos em destaque */}
        <DestaquesSemana />
        
        {/* Chamada para ação (CTA) e dúvidas */}
        <Entrarcontato />
      </main>

      {/* COMPONENTE DE RODAPÉ:
          Contém informações institucionais, links e contatos.
      */}
      <Footer />

    </div>
  )
}

export default App