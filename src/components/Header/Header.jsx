import { faBell, faEye, faEyeSlash, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./header.module.css";
import { useIsValuesHidden } from "../../context/useIsValueHidden";

const Header = () => {
  const { isValuesHidden, toggleValuesHidden } = useIsValuesHidden();

  return (
    <header className={styles.header}> 
      <h1 className={styles.titulo_logo}>SEMAC<span className={styles.dot_logo}>.</span>FINANCES</h1>
      <div className={styles.items_nav}>
        <button type="button" onClick={toggleValuesHidden}><FontAwesomeIcon icon={isValuesHidden ? faEyeSlash : faEye} /></button>
        <button type="button"><FontAwesomeIcon icon={faBell} /></button>
        <button type="button"><FontAwesomeIcon icon={faUser} /></button>
      </div>
    </header>
  )
}

export default Header