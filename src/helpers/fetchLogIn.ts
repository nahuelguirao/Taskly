import { User } from "../types/generalTypes";
import toast from "react-hot-toast";

export async function fetchLogin(
  userCredentials: User,
  navigateTo: (route: string) => void
) {
  try {
    const LOGIN_URL = "http://127.0.0.1:8000/login/";
    const response = await fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredentials),
    });

    if (!response.ok) {
      toast.error("Invalid credentials.", { position: "bottom-center" });
      return;
    }

    navigateTo("/");
    toast.success(`Welcome ${userCredentials.username}!`, { icon: "👋" });

    const responseData = await response.json();
    return responseData.user;
  } catch (error) {
    console.error(error);
  }
}
