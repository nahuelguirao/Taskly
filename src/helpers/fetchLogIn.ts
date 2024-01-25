import { UserCredentials } from "../vite-env";

export async function fetchLogin(
  userCredentials: UserCredentials,
  navigateTo: (route: string) => void,
  setError: (error: string) => void
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
      setError("Invalid credentials.");
      return;
    }

    navigateTo("/");

    const responseData = await response.json();
    return responseData.user;
  } catch (error) {
    console.error(error);
  }
}
