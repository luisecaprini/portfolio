import type { ReactNode } from "react";
import styles from "./styles.module.css"

export default function Genially({name, folderName, desc}: {name: string, folderName: string, desc?: string | ReactNode}){
    return (
        <div className={styles.genially}>
            <div style={{margin: 20}}>
                <h2>{name}</h2>
                <p>{desc}</p>
            </div>
            <div style={{ position: "relative", overflow: "hidden", width: 700, height: 400 }} className={styles.embed}>
                <iframe
                    src={"/portfolio/Genially/" + folderName + "/genially.html"}
                    title="Genially incorporado"
                    style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                    }}
                ></iframe>
            </div>
        </div>
    );
}