import { useContext } from "react";
import { FormErrorContext } from "../context/FormErrorContext";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { fetchLogin } from "../helpers/fetchLogIn";

export function useLogin() {
  //Gets the context errors
  const { error, setError } = useContext(FormErrorContext);
  const { setUser } = useContext(UserContext);

  //To navigate
  const navigateTo = useNavigate();

  const handleLoginIn = async (e: any) => {
    e.preventDefault();

    //Declares the event data
    const username = e.target.username.value;
    const password = e.target.password.value;

    //Declares the user entered credentials and tries to fetch the API
    const userCredentials = { username, password };
    const userData = await fetchLogin(userCredentials, navigateTo, setError);

    setUser({
      id: userData.id,
      username: userData.username,
    });
  };

  return { handleLoginIn, error };
}
