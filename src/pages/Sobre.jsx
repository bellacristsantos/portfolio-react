import { Header } from "../components/Header";
import sobreImg from "../assets/sobre.svg";

export function Sobre() {
  return (
    <>
      <h1>Texto do sobre</h1>
      <Header text="Sobre mim" image={sobreImg} />
    </>
  );
}
