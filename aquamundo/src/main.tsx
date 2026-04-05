
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { CarrinhoProvider } from "./context/carrinhoContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <CarrinhoProvider>
      <App />
    </CarrinhoProvider>
  </BrowserRouter>
);