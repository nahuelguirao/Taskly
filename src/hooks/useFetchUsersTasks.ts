import { Dispatch } from "react";
import { ActionStructure, User } from "../types/generalTypes";

export async function useFetchUsersTasks(
  user: User | undefined,
  dispatch: Dispatch<ActionStructure>
) {
  const BASE_URL = "https://api-taskly-l1d9.onrender.com";

  try {
    if (user !== undefined) {
      localStorage.removeItem("tasks");
      const response = await fetch(`${BASE_URL}/get_tasks/user/${user.id}/`);
      const result = await response.json();

      dispatch({ type: "FETCH TASKS", payload: result });
    }
  } catch (error) {
    console.error(error);
  }
}
