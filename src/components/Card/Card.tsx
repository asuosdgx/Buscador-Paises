import type { Pais } from "../../types/pais";
import style from './Card.module.css';

export default function Card({ pais }: { pais: Pais }) {
  return (
    <div className={style.card}>
      <h3>{pais.name.common}</h3>
      <p>{pais.name.official}</p>
      <p><span>Sub-região:</span> {pais.subregion || 'N/A'}</p>
      <p><span>Idiomas:</span> {pais.languages ? Object.values(pais.languages).join(', ') : 'N/A'}</p>
      <p><span>Fronteiras:</span> {pais.borders && pais.borders.length > 0 ? pais.borders.join(', ') : 'Nenhuma'}</p>
      <p><span>Moedas:</span> {pais.currencies ? Object.values(pais.currencies).map((currency) => currency.name).join(', ') : 'N/A'}</p>
      <p><span>Capital:</span> {pais.capital && pais.capital.length > 0 ? pais.capital.join(', ') : 'N/A'}</p>
      <p><span>População:</span> {pais.population}</p>
      <p><span>Área:</span> {pais.area} km²</p>
      <img src={pais.flags.png} alt={`Bandeira de ${pais.name.common}`} />
    </div>
  );
}
