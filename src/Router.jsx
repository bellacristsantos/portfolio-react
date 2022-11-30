import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "./pages/Inicio";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<h1>Sobre</h1>} />
        <Route path="/portfolio" element={<h1>Portfólio</h1>} />
        <Route path="/contato" element={<h1>Contato</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
