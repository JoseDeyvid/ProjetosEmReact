import { useUser } from "../../contexts/UserContext";
import { CiLocationOn } from "react-icons/ci";

const UserInfos = () => {
  const { user } = useUser();
  return (
    <div>
      <img src={user?.avatar_url} alt={`foto de perfil do ${user?.name}`} />
      <h3>{user?.name}</h3>
      <p>
        <CiLocationOn /> {user?.location}
      </p>
      <div>
        <div>
          <label htmlFor="">Seguidores:</label>
          <p>{user?.followers}</p>
        </div>
        <div>
          <label htmlFor="">Seguindo:</label>
          <p>{user?.following}</p>
        </div>
      </div>
      <button>Ver melhores projetos</button>
    </div>
  );
};

export default UserInfos;
