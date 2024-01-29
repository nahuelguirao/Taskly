import {
  createContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { User } from "../types/generalTypes";

// USER'S CONTEXT
interface UserContextProps {
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>;
  welcomeMessage: boolean;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

// USER'S CONTEXT PROVIDER
interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<undefined | User>(undefined);
  const [welcomeMessage, setWelcomeMessage] = useState(false);

  useEffect(() => {
    // Tries to get a user in the local storage
    const storedUser = localStorage.getItem("user");

    // Parse the JSON only if storedUser is not null
    if (storedUser !== null) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  //If the user != undefined sets it in the local storage
  useEffect(() => {
    if (user !== undefined) {
      localStorage.setItem("user", JSON.stringify(user));
      //Welcome message interval
      setWelcomeMessage(true);

      setTimeout(() => {
        setWelcomeMessage(false);
      }, 5000);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, welcomeMessage }}>
      {children}
    </UserContext.Provider>
  );
};
