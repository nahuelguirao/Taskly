import toast from "react-hot-toast";
import { format } from "date-fns";
import { ActionStructure, Task, User } from "../types/generalTypes";
import { Dispatch } from "react";

export async function editTask(
  filteredTask: Task,
  e: any,
  dispatch: Dispatch<ActionStructure>,
  navigate: (route: string) => void,
  user: User | undefined
) {
  e.preventDefault();

  //Gets the values
  const title = e.currentTarget.title.value;
  const description = e.currentTarget.description.value;

  //Verfications
  if (title.length == 0) {
    toast.error("Title can't be empty");
    return;
  }

  if (title.length > 50) {
    toast.error("Title length must be less than 50 characters.");
    return;
  }

  //If all is correct creates a Task with the new information
  const editedTask: Task = {
    uuid: filteredTask.uuid,
    title,
    description,
    date: format(new Date(), "EEEE, MMMM do"),
  };

  //Creates the action 'EDIT TASK'
  const action: ActionStructure = {
    type: "EDIT TASK",
    payload: editedTask,
  };

  if (user == undefined) {
    toast.success("Task edited!");
    //Executes edit task in the reducer
    dispatch(action);
  } else {
    const response = await fetch(
      `https://api-taskly-l1d9.onrender.com/update_task/${editedTask.uuid}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uuid: editedTask.uuid,
          title: editedTask.title,
          description: editedTask.description,
          date: editedTask.date,
        }),
      }
    );

    if (response.ok) {
      toast.success("Task edited!");
      dispatch(action);
    } else {
      console.error(
        "Error updating task:",
        response.status,
        response.statusText
      );
    }
  }

  //Finally navigates to user's tasks
  navigate("/");
}
