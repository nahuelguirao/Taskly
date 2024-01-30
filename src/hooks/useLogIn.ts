import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { fetchLogin } from "../helpers/fetchLogIn";

export function useLogin() {
  //Gets the context errors
  const userContext = useContext(UserContext);
  const setUser = userContext?.setUser;

  //To navigate
  const navigateTo = useNavigate();

  const handleLoginIn = async (e: any) => {
    e.preventDefault();

    //Declares the event data
    const username = e.target.username.value;
    const password = e.target.password.value;

    //Declares the user entered credentials and tries to fetch the API
    const userCredentials = { username, password };
    const userData = await fetchLogin(userCredentials, navigateTo);

    setUser &&
      setUser({
        id: userData.id,
        username: userData.username,
        token: userData.token,
      });
  };

  return { handleLoginIn };
}
