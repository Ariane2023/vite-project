// src/componentes/SearchBar.tsx
import { useState } from "react";
import styles from "./SearchBar.module.css";

type Props = {
  onSearch: (username: string) => void;
  error: string; // Recebe a prop 'error'
};

export function SearchBar({ onSearch, error }: Props) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() !== "") {
      onSearch(input.trim());
    }
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Digite o nome de usuário do GitHub"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}></button>

      {error && (
        <div className={styles.erroMensagem} dangerouslySetInnerHTML=
        {{ __html: error }} />
      )}
    </div>
  );
}
export default SearchBar;