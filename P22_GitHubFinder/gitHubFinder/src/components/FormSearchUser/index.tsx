import React from "react";
import { FaSearch } from "react-icons/fa";

const FormSearchUser = () => {
  return (
    <form>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <input type="text" placeholder="Digite o nome do usuário" />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default FormSearchUser;
