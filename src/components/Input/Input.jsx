import styles from "./input.module.css"

const Input = ({titulo, value, setValue, placeholder, tipo, ...rest}) => {
  if (tipo !== "select") {
    return (
      <div className={styles.input_container}>
        <p htmlFor={titulo}>{titulo}</p>
        <input value={value} onChange={(e) => setValue(e.target.value)} name={titulo} type={tipo === 'numerico' ? 'number' : 'text'} placeholder={placeholder} {...rest} />
      </div>
    );
  } else {
     return (
      <div className={styles.input_container}>
        <p htmlFor={titulo}>{titulo}</p>
        <select value={value} onChange={(e) => setValue(e.target.value)} name={titulo}>
          <option defaultValue="" value="" disabled>{placeholder}</option>
          <option value="deposito" >Depósito</option>
          <option value="saque">Saque</option>
        </select>
      </div>
    );
  }
  
}

export default Input