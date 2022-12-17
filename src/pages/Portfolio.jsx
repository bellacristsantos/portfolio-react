import { Header } from "../components/Header";
import portfolioImg from "../assets/porfolio.svg";
import styles from "../styles/pages/portfolio.module.css";
import todoImg from "../assets/todo-list.svg";
import calcImg from "../assets/calc.svg";
import quizImg from "../assets/quiz.svg";

export function Portfolio() {
  return (
    <>
      <Header text="Um pouco do que eu já fiz" image={todoImg} />
      <div className={styles.portfolioContainer}>
        <div className={styles.portfolioCard}>
          <button
            className={styles.portfolioButton}
            type="submit"
            onclick={() =>
              window.open("https://todo-list-isabella.netlify.app")
            }
          >
            Todo List - JS
          </button>
        </div>
      </div>
    </>
  );
}
