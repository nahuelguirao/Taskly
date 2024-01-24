import { ActionStructure, Task } from "../vite-env";
import { format } from "date-fns";

export function editTask(
  filteredTask: Task,
  e: any,
  dispatch: (action: ActionStructure) => void,
  navigate: any,
  setError: any
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
    id: filteredTask.id,
    title,
    description,
    date: format(new Date(), "EEEE, MMMM do"),
  };

  //Creates the action 'EDIT TASK'
  const action: ActionStructure = {
    type: "EDIT TASK",
    payload: editedTask,
  };

  //Executes edit task in the reducer
  dispatch(action);

  //Finally navigates to user's tasks
  navigate("/");
}
