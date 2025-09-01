import React from 'react';
import style from './Form.module.css';

interface FormProps {
  pais: string;
  setPais: (pais: string) => void;
  onBuscar: (e: React.FormEvent) => void;
}

const Form: React.FC<FormProps> = ({ pais, setPais, onBuscar }) => (
  <form onSubmit={onBuscar} className={style.form}>
    <input
      type="text"
      placeholder="Digite o nome do país"
      value={pais}
      onChange={(e) => setPais(e.target.value)}
      className={style.input}
    />
    <button type="submit" className={style.button}>Buscar</button>
  </form>
);

export default Form;
