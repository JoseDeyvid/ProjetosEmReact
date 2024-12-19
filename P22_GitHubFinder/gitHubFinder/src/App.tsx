import "./App.css";
import FormSearchUser from "./components/FormSearchUser";
import UserInfos from "./components/UserInfos";
import { useUser } from "./contexts/UserContext";

function App() {
  const { user, errorMessage, loading } = useUser();
  return (
    <div className="container">
      <h1>GitHub Finder</h1>
      <FormSearchUser />
      {loading ? (
        <p>Carregando...</p>
      ) : user ? (
        <UserInfos user={user} />
      ) : (
        <p>{errorMessage}</p>
      )}
    </div>
  );
}

export default App;
