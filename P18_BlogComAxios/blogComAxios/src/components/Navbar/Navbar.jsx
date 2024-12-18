import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to={"/"}>
        <h1 className="navTitle">Blog</h1>
      </Link>
      <ul className="navbarList">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">Novo Post</Link>
        </li>
        <li>
          <Link to="/admin">Gerenciar</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
