import type { Pais } from "./types/pais";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import { useState } from "react";
import chamarApi from "./server";
import style from "./App.module.css";

function App() {
  const [pais, setPais] = useState("");
  const [resultados, setResultados] = useState<Pais[] | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  const handleBuscar = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro(null);
    try {
      const dados = await chamarApi(pais);
      setResultados(dados);
    } catch (err) {
      if (err instanceof Error) {
        setErro(err.message);
      } else {
        setErro("Erro desconhecido.");
      }
      setResultados(null);
    }
  };

  return (
    <div className={style.app}>
      <h1 className={style.title}>Buscador de Países</h1>
      <Form pais={pais} setPais={setPais} onBuscar={handleBuscar} />
      {erro && <div className={style.error}>{erro}</div>}
      <div className={style.cardContainer}>
        {resultados && resultados.length > 0 ? (
          resultados.map((pais: Pais) => (
            <Card key={pais.name.common} pais={pais} />
          ))
        ) : (
          <div className={style.resultadosInvalidos}>Nenhum resultado.</div>
        )}
      </div>
    </div>
  );
}

export default App;
