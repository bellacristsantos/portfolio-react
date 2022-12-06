import { Header } from "../components/Header";
import portfolioImg from "../assets/porfolio.svg";

export function Portfolio() {
  return (
    <>
      <h1>Conteúdo do Portfolio</h1>
      <Header text="Meu Portfolio" image={portfolioImg} />
    </>
  );
}
