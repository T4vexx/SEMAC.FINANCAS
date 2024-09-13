import styles from "./card.module.css";

export const Card = ({ tipo, valor, titulo, children }) => {
  return (
    <div className={
        tipo === 1 ? `${styles.card} ${styles.green_card} ${styles.white_card}` 
        : tipo === 2 ? `${styles.card} ${styles.red_card} ${styles.white_card}` 
        : styles.card }>
      <div className={styles.titulo_card}>
        <h2>{titulo}</h2>
        <span className={styles.icone_card}>{children}</span>
      </div>
      <h1 className={styles.valor_card}>{valor}</h1>
    </div>
  )
}
