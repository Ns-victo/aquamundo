import Header from "./components/header/header"
import Layout from "./components/layout/layout"
import Categorias from "./components/categorias/categorias"
import DestaquesSemana from "./components/destaques/destaquesSemana"
import Entrarcontato from "./components/entrarcontato/entrarcontato"
import Footer from "./components/footer/footer"
/*import MobileHeader from "./components/header/mobileHeader"*/


/*#e7f0ed*/ /*#273f59*/ /*#5ca2b5*/ /*#76b698*/

function App() {


  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">

      <Header />
    

      {/* Conteúdo principal */}
      <main className="flex-1 w-full">
        <Layout />
        <Categorias />
        <DestaquesSemana />
        <Entrarcontato />
      </main>

      <Footer />

    </div>
  )
}

export default App
