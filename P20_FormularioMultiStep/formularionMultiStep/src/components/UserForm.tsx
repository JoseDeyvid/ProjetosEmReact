import "./UserForm.css";
import { Review } from "../utils/Types";

type Props = {
  user: {
    name: string;
    email: string;
  };

  handleChangeUser: (key: string, value: string | Review) => void;
};
const UserForm = ({ user, handleChangeUser }: Props) => {
  return (
    <div className="userFormContainer">
      <div className="formControl">
        <label htmlFor="">Nome:</label>
        <input
          type="text"
          value={user.name}
          onChange={(e) => handleChangeUser("name", e.target.value)}
          required
        />
      </div>
      <div className="formControl">
        <label htmlFor="">Email:</label>
        <input
          type="email"
          value={user.email}
          onChange={(e) => handleChangeUser("email", e.target.value)}
          required
        />
      </div>
    </div>
  );
};

export default UserForm;
