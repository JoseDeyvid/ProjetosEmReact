import { CiLocationOn } from "react-icons/ci";

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
  const handleShowRepos = async () => {
    try {
      const res = await fetch(
        `https://api.github.com/users/${user.login}/repos`
      );
      if (!res.ok) throw new Error("Response status: " + res.status);
      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="userInfosContainer">
      <img src={user?.avatar_url} alt={`foto de perfil do ${user?.name}`} />
      <h3>{user?.name}</h3>
      <p>
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
