import { useContext, useEffect, useState } from "react";
import { FormErrorContext } from "../context/FormErrorContext";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { fetchLogin } from "../helpers/fetchLogIn";

export function useLogin() {
  //Gets the context errors
  const { error, setError } = useContext(FormErrorContext);
  const { setUser } = useContext(UserContext);

  //Resets the global form-error once each time the user enters in 'edit task'
  useEffect(() => {
    setError("");
  }, []);

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
      token: userData.token,
    });
  };

  return { handleLoginIn, error };
}
