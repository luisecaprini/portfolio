import styles from "./styles.module.css";

export default function Carreira() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Carreira</h1>

      {/* EDUCAÇÃO */}
      <section className={styles.section}>
        <h2 className={styles.subtitle}>Educação</h2>

        <article className={styles.item}>
          <h3 className={styles.course}>Graduação em Psicologia</h3>
          <p className={styles.details}>Universidade Vila Velha — Conclusão em julho de 2023</p>
        </article>

        <article className={styles.item}>
          <h3 className={styles.course}>Pós-graduação em Design Instrucional</h3>
          <p className={styles.details}>Instituto de Desenho Instrucional — Conclusão em janeiro de 2024</p>
        </article>

        <article className={styles.item}>
          <h3 className={styles.course}>Pós-graduação em Educação e Novas Tecnologias</h3>
          <p className={styles.details}>Universidade Vila Velha — Cursando (conclusão em junho de 2025)</p>
        </article>
      </section>

      {/* EXPERIÊNCIA PROFISSIONAL */}
      <section className={styles.section}>
        <h2 className={styles.subtitle}>Experiência Profissional</h2>

        <article className={styles.item}>
          <h3 className={styles.jobTitle}>Designer Instrucional</h3>
          <p className={styles.details}>Universidade Vila Velha — Agosto de 2023 - atualmente</p>
          <ul className={styles.list}>
            <li>Criação e avaliação de recursos pedagógicos e ferramentas para ensino à distância em cursos superiores, com foco em tecnologia e inovação;</li>
            <li>Desenvolvimento de projetos pedagógicos multidisciplinares para facilitar o processo de ensino-aprendizagem nas modalidades híbrida e à distância;</li>
            <li>Apoio no planejamento de matrizes instrucionais de disciplinas de cursos nos modelos à distância e híbrido;</li>
            <li>Auxílio a professores e coordenadores no planejamento e desenho de disciplinas para educação à distância;</li>
            <li>Capacitação de profissionais para desenvolvimento de matrizes instrucionais e uso de recursos pedagógicos.</li>
          </ul>
        </article>

        <article className={styles.item}>
          <h3 className={styles.jobTitle}>Designer Educacional</h3>
          <p className={styles.details}>Kuau Sonho — Agosto de 2022 - Julho de 2023</p>
          <ul className={styles.list}>
            <li>Planejamento, desenvolvimento e avaliação de projetos pedagógicos para ensino presencial com metodologias ativas (Ensino Fundamental I, II e Médio);</li>
            <li>Criação de atividades em ambiente virtual de aprendizagem (LMS autoral);</li>
            <li>Criação e desenvolvimento de livros didáticos para Educação Socioemocional de crianças;</li>
            <li>Planejamento e desenvolvimento de e-books para capacitação de educadores;</li>
            <li>Desenvolvimento de guias instrucionais para aplicação de aulas.</li>
          </ul>
        </article>

        <article className={styles.item}>
          <h3 className={styles.jobTitle}>Estágio em Psicologia Clínica</h3>
          <p className={styles.details}>Clínica de Psicologia da UVV — Julho de 2022 - Julho de 2023</p>
          <ul className={styles.list}>
            <li>Atendimento psicoterapêutico individual para público infantil, adulto e idoso.</li>
          </ul>
        </article>

        <article className={styles.item}>
          <h3 className={styles.jobTitle}>Estágio com Produção de Conteúdo em EdTech</h3>
          <p className={styles.details}>Março de 2021 - Julho de 2022</p>
          <ul className={styles.list}>
            <li>Desenvolvimento de textos para blog e mídias sociais;</li>
            <li>Auxílio na criação de materiais didáticos sobre Projeto de Vida e Protagonismo Juvenil, com foco em metodologias ativas.</li>
          </ul>
        </article>
      </section>
    </div>
  );
}
