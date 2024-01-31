import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { fetchSignIn } from "../helpers/fetchSignIn";
import toast from "react-hot-toast";

export function useSignIn() {
  //Gets the context's error
  const { setUser }: any = useContext(UserContext);

  //TO navigate
  const navigateTo = useNavigate();

  const signInUser = async (e: any) => {
    e.preventDefault();

    //All user's info
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password1 = e.target.password1.value;
    const password2 = e.target.password2.value;

    // VALIDATIONS
    if (password1 != password2) {
      toast.error("Passwords are not the same.");
      return;
    }

    if (username.length == 0 || email.length == 0) {
      toast.error("Username and email must be completed!");
      return;
    }

    if (password1.length < 8) {
      toast.error("Password's length must be greather than 8 characters.");
      return;
    }

    if (username.length > 255 || email.length > 255) {
      toast.error(
        "Username and email length must be lower than 255 characters length."
      );
      return;
    }

    //If passes the validation creates the user and fetch into the API
    const newUser = { username, password: password1, email };
    const userData = await fetchSignIn(newUser, navigateTo);

    // Sets user's info in the usercontext
    setUser({
      id: userData.id,
      username: userData.username,
      token: userData.token,
    });

    toast(`Welcome ${userData.username}!`, { icon: "👋" });
  };

  return { signInUser };
}
