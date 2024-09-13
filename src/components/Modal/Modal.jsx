import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Modal.module.css";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Input from "../Input/Input";
import { useState } from "react";
import { format } from "date-fns";
import { toast } from "react-toastify";


const Modal = ({ setModalOpen, setFakeApi }) => {
  const [descricao, setDescricao] = useState("");
  const [tag, setTag] = useState("");
  const [valor, setValor] = useState(0);
  const [tipo, setTipo] = useState("");

  const handleCreateNewEntry = (e) => {
    e.preventDefault();
    setFakeApi((prevState) => [...prevState, {
      descricao,
      tag,
      valor,
      data: format(new Date(), "dd/MM/yyyy"),
      tipo 
    }])
    toast.success("Item adicionado com sucesso");
    setModalOpen(false);
  }

  return (
    <div className={styles.modal_blur}>
      <div className={styles.modal}>
        <div className={styles.modal_header}>
          <h1>Adicione uma nova operação</h1>
          <FontAwesomeIcon onClick={() => setModalOpen(false)} icon={faX} />
        </div>
        <form onSubmit={handleCreateNewEntry} className={styles.modal_inputs}>
          <Input 
            value={descricao}
            setValue={setDescricao}
            titulo="Descrição" 
            placeholder="Viagem para praia" 
          />
          <Input 
            value={tag}
            setValue={setTag}
            titulo="Tag" 
            placeholder="inteligência" 
          />
          <Input 
            value={valor}
            setValue={setValor}
            titulo="Valor" 
            placeholder="R$ 120,00" 
            tipo="numerico" />
          <Input 
            value={tipo}
            setValue={setTipo}
            titulo="Tipo" 
            placeholder="Selecione" 
            tipo="select" 
          />
          <button type="submit">Adicionar</button>
        </form>
      </div>
    </div>
  )
}

export default Modal