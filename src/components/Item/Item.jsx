import { faCircleDown, faCircleUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./item.module.css";


const Item = ({descricao, tag, valor, data, tipo}) => {
  return (
    <div className={styles.item_container}>
      <p style={{ width: "21.875rem" }}>{descricao}</p>
      <p style={{ width: "12.5rem" }}>{tag}</p>
      <p style={{ width: "15.625rem" }}><span style={{fontSize: "14px"}}>R$</span>{valor}</p>
      <p style={{ width: "11.25rem" }}>{data}</p>
      <p style={{ width: "3.825rem", fontSize: "26px"}}>{tipo === "deposito" ? 
        <FontAwesomeIcon color="#5EEA63" icon={faCircleUp} /> : 
        <FontAwesomeIcon color="#E55050" icon={faCircleDown} />
      }</p>
    </div>
  )
}

export default Item