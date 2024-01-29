import { ActionStructure, Task } from "../vite-env";
import { format } from "date-fns";

export const addTask = async (
  e: any,
  dispatch: (action: ActionStructure) => void,
  navigateTo: (route: string) => void,
  setError: (error: string) => void,
  user: any
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
    uuid: crypto.randomUUID(),
    title,
    description,
    date: format(new Date(), "EEEE, MMMM do"),
  };

  //Prepares the action to send it to the reducer
  const action: ActionStructure = {
    type: "ADD TASK",
    payload: newTask,
  };

  //Executes 'ADD TASK'
  if (user == undefined) {
    console.log("paso");
    dispatch(action);
  } else {
    try {
      const response = await fetch("http://127.0.0.1:8000/tasks/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uuid: newTask.uuid,
          title: newTask.title,
          description: newTask.description,
          date: newTask.date,
          user: user.id,
        }),
      });

      if (!response.ok) {
        console.error("Failed to add task:", response.statusText);
      }

      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  }

  //Finally navigates to user's tasks
  navigateTo("/");
};
