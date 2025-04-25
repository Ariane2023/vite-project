// App.tsx
import { Header } from "./componentes/Header";
import { SearchBar } from "./componentes/SearchBar";
import { useGitHubUser } from "./hooks/useGitHubUser";
import { UserProfile } from "./componentes/UserProfile";
import styles from "./App.module.css";

export function App() {
  const { userData, loading, error, fetchUser } = useGitHubUser();

  const handleSearch = (username: string) => {
    fetchUser(username);
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.box}>
        <Header />
        <SearchBar onSearch={handleSearch} error={error} /> {/* Passando 'error' como prop */}

        {loading && <p>Carregando...</p>}
        {userData && (
          <UserProfile
            avatar_url={userData.avatar_url}
            name={userData.name}
            login={userData.login}
            bio={userData.bio}
            html_url={userData.html_url}
          />
        )}
      </div>
    </div>
  );
}