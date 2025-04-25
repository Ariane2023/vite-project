// src/componentes/Header.tsx

import styles from "./Header.module.css";
import logo from './assets/logo.svg';

export function Header() {
  return (
    <div className={styles.topBox}>
      <div className={styles.header}>
        <img src={logo} alt="logo" className={styles.logo} />
        <h1>Perfil <strong>Github</strong></h1>
      </div>
    </div>
  );
}
