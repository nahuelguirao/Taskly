import { ActionStructure, Task } from "../vite-env";

export const addTask = (e: any, dispatch: any, navigateTo: any) => {
  e.preventDefault();

  const title = e.target.title.value;
  const description = e.target.description.value;

  //Creates a new task with the event information (submited)
  const newTask: Task = {
    title: title,
    description: description,
  };

  //Prepares the action to send it to the reducer
  const action: ActionStructure = {
    type: "ADD TASK",
    payload: newTask,
  };

  //Executes 'ADD TASK'
  dispatch(action);

  //If there a title navigates to Tasks
  if (title.length > 1) {
    navigateTo("/");
  }
};
