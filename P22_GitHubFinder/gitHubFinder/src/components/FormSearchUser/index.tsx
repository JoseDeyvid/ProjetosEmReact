import "./styles.css";
import { FormEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useUser } from "../../contexts/UserContext";
import { User } from "../../utils/type";

const FormSearchUser = () => {
  const [userName, setUserName] = useState("");
  const { setUser, setErrorMessage, loading, setLoading } = useUser();

  const handleSearchUser = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }
      const userJson = (await res.json()) as User;
      setUser(userJson);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Usuário não encontrado!");
      setUser(null);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={(e) => handleSearchUser(e)}>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className="search-field">
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit" disabled={loading || userName.trim() === ""}>
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default FormSearchUser;
