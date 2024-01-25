import { ActionStructure, Task } from "../vite-env";

export const addTask = (
  e: any,
  dispatch: (action: ActionStructure) => void,
  navigateTo: (route: string) => void,
  setError: (error: string) => void
) => {
  e.preventDefault();

  //Gets the values
  const title = e.target.title.value;
  const description = e.target.description.value;

  //Verifications
  if (title.length == 0) {
    setError("Title can't be empty.");
    return;
  }

  if (title.length > 50) {
    setError("Title length must be less than 50 characters.");
    return;
  }

  //Creates a new task with the event information (submited)
  const newTask: Task = {
    title,
    description,
  };

  //Prepares the action to send it to the reducer
  const action: ActionStructure = {
    type: "ADD TASK",
    payload: newTask,
  };

  //Executes 'ADD TASK'
  dispatch(action);

  //Finally navigates to user's tasks
  navigateTo("/");
};
