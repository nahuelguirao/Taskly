import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function useHandleLogout() {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    try {
      const LOGOUT_URL = "http://127.0.0.1:8000/logout/";
      fetch(LOGOUT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: user.token }),
      });
    } catch (error) {
      console.error(error);
    }

    setUser(undefined);
  };

  return { user, handleLogout };
}
