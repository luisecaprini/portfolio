import type { ReactNode } from "react";
import styles from "./styles.module.css"

export default function Projeto({name, desc, embed, clicavel, imagens} : {name: string, desc: string | ReactNode, embed: ReactNode, clicavel?: boolean, imagens?: string[]}){
    return (
        <div className={styles.projeto}>
            <div className={styles.title}>
                <h2 className="title">{name}</h2>
                {clicavel && <p style={{color: "var(--primaria)"}}>Clicando no documento ao lado é possível abrir o PDF para leitura.</p> }
                <p>{desc}</p>
            </div>
            <div className={styles.embed}>
                {embed != "" && embed != null ? embed : (imagens ? imagens.map(x => <><img src={"/portfolio/" + x} alt="" width={(90 / imagens.length) + "%"} style={{margin: 10}} /></>) : null)}
            </div>
        </div>
    );
}