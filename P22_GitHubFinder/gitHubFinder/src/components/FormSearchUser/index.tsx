import { FormEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useUser } from "../../contexts/UserContext";
import { User } from "../../utils/type";

const FormSearchUser = () => {
  const [userName, setUserName] = useState("");
  const { setUser } = useUser();

  const handleSearchUser = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const userJson = (await res.json()) as User;
      setUser(userJson);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={(e) => handleSearchUser(e)}>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <input
        type="text"
        placeholder="Digite o nome do usuário"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default FormSearchUser;
