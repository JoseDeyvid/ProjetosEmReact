import { createContext, useContext, useState } from "react";
import { ContextProps, User } from "../utils/type";

type UserValues = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const UserContext = createContext({} as UserValues);

export const useUser = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }: ContextProps) => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
