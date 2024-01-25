import { NewUser } from "../vite-env";

export async function fetchSignIn(
  setError: any,
  newUser: NewUser,
  navigateTo: (route: string) => void
) {
  const URL_SIGNIN = "http://127.0.0.1:8000/signin/";

  try {
    const response = await fetch(URL_SIGNIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      setError("Username or email already exists!");
      throw new Error("Error creating the user.");
    }

    //If all is correct and the user is created navigates to tasks
    navigateTo("/");

    //Returns the data to set usercontext user's info
    const responseData = await response.json();
    return responseData.user;
  } catch (error) {
    console.error(error);
  }
}
