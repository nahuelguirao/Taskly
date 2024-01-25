import { createContext, useState } from "react";
import { LogedUser } from "../vite-env";

export const UserContext = createContext<any>(undefined);

export const UserContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<LogedUser | undefined>(undefined);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
