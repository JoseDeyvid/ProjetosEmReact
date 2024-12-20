import "./App.css";
import FormSearchUser from "./components/FormSearchUser";
import UserInfos from "./components/UserInfos";
import { useUser } from "./contexts/UserContext";

function App() {
  const { user, errorMessage, loading } = useUser();
  return (
    <div className="container">
      <h1 style={{ paddingBottom: "1rem" }}>GitHub Finder</h1>
      <FormSearchUser />
      {loading ? (
        <p style={{ marginTop: "1rem" }}>Carregando...</p>
      ) : user ? (
        <UserInfos user={user} />
      ) : (
        <p style={{ marginTop: "1rem" }}>{errorMessage}</p>
      )}
    </div>
  );
}

export default App;
