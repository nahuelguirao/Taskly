import { ActionStructure, Task } from "../vite-env";
import { format } from "date-fns";

export async function editTask(
  filteredTask: Task,
  e: any,
  dispatch: (action: ActionStructure) => void,
  navigate: any,
  setError: (error: string) => void,
  user: any
) {
  e.preventDefault();

  //Gets the values
  const title = e.target.title.value;
  const description = e.target.description.value;

  //Verfications
  if (title.length == 0) {
    setError("Title can't be empty.");
    return;
  }

  if (title.length > 50) {
    setError("Title length must be less than 50 characters.");
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
    //Executes edit task in the reducer
    dispatch(action);
  } else {
    const response = await fetch(
      `http://127.0.0.1:8000/update_task/${editedTask.uuid}/`,
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
