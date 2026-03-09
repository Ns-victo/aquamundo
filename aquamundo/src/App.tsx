import { Routes, Route } from "react-router-dom"
import Header from "./components/header/header";

import Home from "./pages/home/home";
import Loja from "./pages/loja/loja";



function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loja" element={<Loja />} />
     
  
      </Routes>
    </>
  );
}

export default App;