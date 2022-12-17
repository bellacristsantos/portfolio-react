import { Header } from "../components/Header";
import sobreImg from "../assets/sobre.svg";
import styles from "../styles/pages/sobre.module.css"

export function Sobre() {
  return (
    <>
      <Header text="Quem sou eu na fila do pão" image={sobreImg} />
      <p className={styles.sobreContainer}>
        Mineira de Belo Horizonte, estudante de Engenharia de Software, muito
        curiosa e em busca de pesquisar, aprender e conectar assuntos
        relacionados a desenvolvimento de software, experiência do usuário e
        inteligência artificial. Gosto de comunicar ideias e trabalhar em equipe
        no desenvolvimento de projetos. Trabalho com HTML, CSS, JS e com os
        frameworks Vue e React. Novos aprendizados são a minha motivação e
        acredito que foco e resiliência são essenciais para alcançar objetivos
        mensuráveis.{" "}
      </p>
    </>
  );
}
