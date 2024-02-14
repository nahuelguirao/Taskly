import toast from "react-hot-toast";

export async function fetchSignIn(
  newUser: any,
  navigateTo: (route: string) => void
) {
  const URL_SIGNIN = "https://api-taskly-l1d9.onrender.com/signin/";

  try {
    const waitingToast = toast.loading("Signing in...");

    const response = await fetch(URL_SIGNIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      throw new Error("Error creating the user.");
    }

    toast.dismiss(waitingToast);

    //If all is correct and the user is created navigates to tasks
    navigateTo("/");

    //Returns the data to set usercontext user's info
    const responseData = await response.json();

    return responseData.user;
  } catch (error) {
    console.error(error);
  }
}
