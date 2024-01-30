import toast from "react-hot-toast";
import { format } from "date-fns";
import { ActionStructure, Task, User } from "../types/generalTypes";
import { Dispatch, FormEvent } from "react";

export const addTask = async (
  e: FormEvent<HTMLFormElement>,
  dispatch: Dispatch<ActionStructure>,
  navigateTo: (route: string) => void,
  user: User | undefined
) => {
  e.preventDefault();

  //Gets the values
  const title = e.currentTarget.title.value;
  const description = e.currentTarget.description.value;

  //Verifications
  if (title.length == 0) {
    toast.error("Title can't be empty");
    return;
  }

  if (title.length > 50) {
    toast.error("Title length must be less than 50 characters.");
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
    dispatch(action);
    toast.success("Task added!");
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

      toast.success("Task added!");
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  }

  //Finally navigates to user's tasks
  navigateTo("/");
};
