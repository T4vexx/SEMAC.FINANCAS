import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./app.module.css";
import { Card } from "./components/Card/Card.jsx";
import Header from "./components/Header/Header.jsx";
import { faCircleDown, faCircleUp } from "@fortawesome/free-regular-svg-icons";
import { faDollarSign, faPlus } from "@fortawesome/free-solid-svg-icons";
import Item from "./components/Item/Item.jsx";
import Modal from "./components/Modal/Modal.jsx";
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useIsValuesHidden } from "./context/useIsValueHidden.jsx";
 
function formatCurrency(value) {
  return Number(value).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
		maximumFractionDigits: 2,
  });
}

function App() {
	const { isValuesHidden } = useIsValuesHidden();
	const [total, setTotal] = useState(0);
	const [deposito, setDeposito] = useState(0);
	const [saque, setSaque] = useState(0);
	const [modalOpen, setModalOpen] = useState(false);
	const [fakeApi, setFakeApi] = useState([
		{ descricao: "Compra na amazon", tag: "#lazer", valor: 120, data: "10/09/2024", tipo: "saque" },
		{ descricao: "Venda do meu quadro", tag: "#economia", valor: 30, data: "11/09/2024", tipo: "deposito" },
		{ descricao: "Cortar grama do vizinho", tag: "#trabalho", valor: 20, data: "15/09/2024", tipo: "deposito" },
		{ descricao: "Freela para SEMAC", tag: "#trabalho", valor: 40, data: "20/09/2024", tipo: "deposito" }
	]);
	const headers = [
    { label: "Descrição", width: "21.875rem" },
    { label: "Tag", width: "12.5rem" },
    { label: "Valor", width: "15.625rem" },
    { label: "Data", width: "11.25rem" },
    { label: "Tipo", width: "3.75rem" }
  ];

	
	useEffect(() => {
		const totalAmount = fakeApi.reduce((total, item) => {
			if (item.tipo === "deposito") {
				return total + Number(item.valor);
			} else if (item.tipo === "saque") {
				return total - Number(item.valor);
			}
			return total;
		}, 0)
		setTotal(totalAmount)
		const depositAmount = fakeApi.reduce((total, item) => {
			if (item.tipo === "deposito") {
				return total + Number(item.valor);
			}
			return total;
		}, 0)
		setDeposito(depositAmount)
		const saqueAmount = fakeApi.reduce((total, item) => {
			if (item.tipo === "saque") {
				return total + Number(item.valor);
			}
			return total;
		}, 0)
		setSaque(saqueAmount)
	}, [fakeApi])


	return (
		<>
			<div className={styles.app}>
				<div className={styles.navbar}>
					<Header />
				</div>
				<div className={styles.content}>
					<div className={styles.container}>
						<div className={styles.card_menu}>
							<Card valor={`+ R$ ${isValuesHidden ? "****" : deposito}`} titulo="Entrada">
								<FontAwesomeIcon 
									color="#5EEA63"
									icon={faCircleUp} 
								/>
							</Card>

							<Card valor={`- R$ ${isValuesHidden ? "****" : saque}`} titulo="Saída">
								<FontAwesomeIcon 
									color="#E55050"
									icon={faCircleDown} 
								/>
							</Card>

							<Card valor={`${total > 0 ? "+" : "-"} R$ ${isValuesHidden ? "****" : Math.abs(total)}`} titulo="Total" tipo={total > 0 ? 1 : 2}>
								<FontAwesomeIcon 
									color="#ffffff" 
									icon={faDollarSign} 
								/>
							</Card>
						</div>

						<div className={styles.operacoes_menu}>
							<div className={styles.operacoes_titulo}>
								{headers.map((header) => (
									<p key={header.label} style={{ width: header.width }}>
										{header.label}
									</p>
								))}
							</div>
							<div className={styles.operacoes_list}>
								{fakeApi.map((item) => (
									<Item key={item.descricao} valor={isValuesHidden ? "****" : formatCurrency(item.valor)} descricao={item.descricao} tag={item.tag} data={item.data} tipo={item.tipo} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<button onClick={() => setModalOpen(true)} className={styles.botao_adicionar_item} type="button">
				<FontAwesomeIcon icon={faPlus} color="#ffffff" />				
			</button>
			<ToastContainer
				position="top-right"
				autoClose={4000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				theme="light"
				/>					
			{modalOpen && <Modal setFakeApi={setFakeApi} setModalOpen={setModalOpen}/>}
		</>
	);
}

export default App;
