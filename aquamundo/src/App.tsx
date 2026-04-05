import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";

import Home from "./pages/home/home";
import Loja from "./pages/loja/loja";
import Contato from "./pages/contato/contato";
import Sobre from "./pages/sobre/sobre";
import PaginaCarrinho from "./pages/carrinho/carrinho";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sobrenos" element={<Sobre />} />
        <Route path="/carrinho" element={<PaginaCarrinho />} />
        <Route path="/sobre" element={<Navigate to="/sobrenos" replace />} />
      </Routes>
    </>
  );
}

export default App;