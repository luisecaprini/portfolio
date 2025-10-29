import styles from "./styles.module.css";

export default function Contato() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contato</h1>

      {/* INFORMAÇÕES DE CONTATO */}
      <section className={styles.section}>
        <h2 className={styles.subtitle}>Informações</h2>

        <article className={styles.item}>
          <p className={styles.details}>
            Caso queira entrar em contato para colaborações, projetos ou dúvidas, utilize um dos canais abaixo:
          </p>
          <ul className={styles.list}>
            <li><strong>Email:</strong> <a href="mailto:luisecaprini.psi@gmail.com">luisecaprini.psi@gmail.com</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/luisecaprini" target="_blank" rel="noopener noreferrer">linkedin.com/in/luisecaprini</a></li>
            <li><strong>Instagram:</strong> <a href="https://instagram.com/fortuidade" target="_blank" rel="noopener noreferrer">@fortuidade</a></li>
            <li><strong>Whatsapp:</strong> <a href="https://wa.me/27997687173" target="_blank" rel="noopener noreferrer">(27) 99768 7173</a></li>
          </ul>
        </article>
      </section>
    </div>
  );
}
