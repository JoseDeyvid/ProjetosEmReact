import { createContext, useContext, useState } from "react";
import { ContextProps, User } from "../utils/type";

type UserValues = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
};

const UserContext = createContext({} as UserValues);

export const useUser = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }: ContextProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <UserContext.Provider
      value={{ user, setUser, errorMessage, setErrorMessage }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
