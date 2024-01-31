import { Dispatch, useContext } from "react";
import { UserContext } from "../context/UserContext";
import toast from "react-hot-toast";
import { UtilitiesContext } from "../context/UtilitiesContext";
import { ActionStructure } from "../types/generalTypes";

export function useHandleLogout(dispatch: Dispatch<ActionStructure>) {
  //Gest users info and setUser
  const userContext = useContext(UserContext);
  const user = userContext?.user;
  const setUser = userContext?.setUser;

  //Navigator
  const { navigateTo } = useContext(UtilitiesContext);

  const handleLogout = async () => {
    try {
      const LOGOUT_URL = "https://api-taskly-l1d9.onrender.com/logout/";

      await fetch(LOGOUT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: user?.token }),
      });
    } catch (error) {
      console.error(error);
    }

    //Finally, update user's context = undefined, remove user's info  from local storage, removes tasks with dispatch + toast + navigates to main
    if (setUser) {
      setUser(undefined);
      localStorage.removeItem("user");
      dispatch({ type: "LOGOUT" });
      navigateTo("/");
      toast("Goodbye!", { icon: "👋" });
    }
  };

  return { user, handleLogout };
}
