import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Projeto from "../../components/Projeto";
import Genially from "../../components/Genially";

interface ProjetoData {
  name: string;
  desc?: string;
  embed?: string;
  clicavel?: boolean;
  genially?: boolean;
  folderName?: string;
  imagens?: string[];
}

export default function Projetos() {
  const [projetos, setProjetos] = useState<ProjetoData[]>([]);

  useEffect(() => {
    fetch("/portfolio/projetos.json")
      .then((res) => res.json())
      .then((data) => setProjetos(data))
      .catch((err) => console.error("Erro ao carregar projetos:", err));
  }, []);

  return (
    <div className={styles.projetos}>
      <h1>Projetos</h1>
      <div
        style={{
          width: "80%",
          display: "inherit",
          flexDirection: "inherit",
          justifyContent: "inherit",
          alignItems: "inherit",
        }}
      >
        <p>
          Todos os trabalhos apresentados a seguir estão fragmentados. A
          visualização parcial dos materiais se justifica pela preservação do
          sigilo posto em contrato pela empresa que detém os direitos autorais
          das peças abaixo. <br></br>Vale ressaltar que parte dos trabalhos
          expostos teve{" "}
          <span style={{ textDecoration: "underline" }}>
            finalização estética
          </span>{" "}
          feita por designers gráficos.
        </p>

        {projetos.map((p, i) =>
          p.genially ? (
            <Genially key={i} name={p.name} folderName={p.folderName || ""} desc={p.desc} />
          ) : (
            <Projeto
              key={i}
              name={p.name}
              desc={p.desc || ""}
              clicavel={p.clicavel}
              embed={
                p.embed ? <iframe
                  src={p.embed}
                  width="640"
                  height="480"
                  allow="autoplay"
                ></iframe> : null
              }
              imagens={p.imagens}
            />
          )
        )}
      </div>
    </div>
  );
}
