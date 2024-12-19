import "./App.css";
import FormSearchUser from "./components/FormSearchUser";
import UserInfos from "./components/UserInfos";
import { useUser } from "./contexts/UserContext";

function App() {
  const { user, errorMessage } = useUser();
  return (
    <div>
      <h1>GitHub Finder</h1>
      <FormSearchUser />
      {user ? <UserInfos /> : <p>{errorMessage}</p>}
    </div>
  );
}

export default App;
