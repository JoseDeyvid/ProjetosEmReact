import "./styles.css";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

type UserProps = {
  user: {
    name: string;
    login: string;
    avatar_url: string;
    location: string;
    followers: number;
    following: number;
  };
};

const UserInfos = ({ user }: UserProps) => {
  const navigate = useNavigate();
  const handleShowRepos = () => {
    navigate(`/repos/${user.login}`);
  };
  return (
    <div className="userInfosContainer">
      <img src={user?.avatar_url} alt={`foto de perfil do ${user?.name}`} />
      <h3>{user?.name}</h3>
      <p className="location">
        <CiLocationOn /> {user?.location}
      </p>
      <div className="follows">
        <div className="followers">
          <label htmlFor="">Seguidores:</label>
          <p>{user?.followers}</p>
        </div>
        <div className="following">
          <label htmlFor="">Seguindo:</label>
          <p>{user?.following}</p>
        </div>
      </div>
      <button onClick={handleShowRepos}>Ver melhores projetos</button>
    </div>
  );
};

export default UserInfos;
