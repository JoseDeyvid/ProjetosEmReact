import { createContext, useContext, useState } from "react";
import { ContextProps, User } from "../utils/type";

type UserValues = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserContext = createContext<UserValues | undefined>(undefined);

export const useUser = (): UserValues => {
  const context = useContext(UserContext);
  if (!context)
    throw new Error("useUser precisa ser usado com algum valor passado!");
  return context;
};

const UserProvider = ({ children }: ContextProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        errorMessage,
        setErrorMessage,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
