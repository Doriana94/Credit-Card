import styles from "./page.module.css";
import Form from "./components/Form/Form";
import Card from "./components/Card/Card";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <Card />
      </div>
      <div className={styles.right}>
        <Form />
      </div>
    </main>
  );
}
