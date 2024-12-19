import { useUser } from "../../contexts/UserContext";

const UserInfos = () => {
  const { user } = useUser();
  return (
    <div>
      <img src={user?.avatar_url} alt={`foto de perfil do ${user?.name}`} />
    </div>
  );
};

export default UserInfos;
