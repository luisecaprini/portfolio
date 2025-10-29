import styles from "./styles.module.css";
import { Link } from "react-router-dom";
export default function Home(){
    return (
        <div className={styles.home}>
            <div className={styles.header}>
                <h1>Luise Caprini</h1>
                <div className={styles.subtitle}>
                    <img src="/icon.png" alt="|" width={20} /><p>Designer Educacional</p><img src="/icon.png" alt="|" width={20} /><p>Psicóloga</p><img src="/icon.png" alt="|" width={20} />
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.sobreMim}>
                    <img src="/sobreMim.png" alt="" width={500} />
                    <div className={styles.sobreMimText}>
                        <h1>Sobre Mim</h1>
                        <p>Designer educacional com ênfase em Low-level Design e experiência em blended learning. Apaixonada por transmitir conhecimento de forma dinâmica e descomplicada. Além da experiência como designer educacional, a graduação em psicologia auxilia no entendimento dos processos de aprendizagem e análise contextual.</p>
                        <p>Destaque para a criatividade, rápida aprendizagem, fluência verbal e escrita, visão analítica, gestão do tempo e comunicação interpessoal. </p>
                        <h3>Algumas qualificações</h3>
                        <ul>
                            <li>Domínio do pacote Office, Google Workspace e Canva;</li>
                            <li>Inglês intermediário;</li>
                            <li>Facilidade com tecnologia;</li>
                            <li>Domínio de ferramentas de aprendizado interativo como Genianlly, Kahoot! e Pixton;</li>
                            <li>Experiência com Learning management system;</li>
                            <li>Conhecimento sobre inteligência emocional e soft skills.</li>
                        </ul>
                    </div>
                </div>
                {/* <Carreira></Carreira> */}
                <div className={styles.abas}>
                    <div>
                        <h1>Projetos</h1>
                        <Link to="/projetos">
                            <button>
                                Acessar projetos
                            </button>
                        </Link>
                    </div>
                    <div>
                        <h1>Carreira</h1>
                        <Link to="/carreira">
                            <button>
                                Acessar currículo
                            </button>
                        </Link>
                    </div>
                    <div>
                        <h1>Contato</h1>
                        <Link to="/contato">
                            <button>
                                Entrar em contato
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}