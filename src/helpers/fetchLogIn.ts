import toast from "react-hot-toast";

export async function fetchLogin(
  userCredentials: any,
  navigateTo: (route: string) => void
) {
  try {
    const LOGIN_URL = "https://api-taskly-l1d9.onrender.com/login/";

    const waitingToast = toast.loading("Logging in...");

    const response = await fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredentials),
    });

    toast.dismiss(waitingToast);

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
