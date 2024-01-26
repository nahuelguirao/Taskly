import { createContext, useEffect, useState } from "react";

export const UserContext = createContext<any>(undefined);

export const UserContextProvider = ({ children }: any) => {
  const [user, setUser] = useState(undefined);
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
