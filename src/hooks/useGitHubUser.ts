import { useState } from "react";

export function useGitHubUser() {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchUser(username: string) {
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        throw new Error("Nenhum perfil foi encontrado com esse nome de usuário.<br />Tente novamente");
      }

      const data = await response.json();
      setUserData(data);
    } catch (err: any) {
      setError(err.message || "Erro ao buscar usuário");
    } finally {
      setLoading(false);
    }
  }

  return { userData, loading, error, fetchUser };
}
