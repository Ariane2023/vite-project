// src/componentes/Header.tsx

import styles from "./Header.module.css"; // vamos criar esse estilo também

export function Header() {
  return (
    <div className={styles.topBox}>
      <div className={styles.header}>
        <img src="src/assets/logo.svg" alt="Logo" className={styles.logo} />
        <h1>Perfil <strong>Github</strong></h1>
      </div>
    </div>
  );
}
