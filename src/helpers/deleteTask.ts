import toast from "react-hot-toast";
import { ActionStructure, UUID, User } from "../types/generalTypes";
import { Dispatch } from "react";

export async function deleteTask(
  uuid: UUID,
  dispatch: Dispatch<ActionStructure>,
  user: User | undefined
) {
  //Sets action 'DELETE TASK'
  const action: ActionStructure = {
    type: "DELETE TASK",
    payload: uuid,
  };

  //Try to delete task
  if (user == undefined) {
    dispatch(action);
    toast.success("Task deleted!");
  } else {
    try {
      fetch(`https://api-taskly-l1d9.onrender.com/delete_task/${uuid}/`, {
        method: "DELETE",
      });

      toast.success("Task deleted!");
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  }
}
