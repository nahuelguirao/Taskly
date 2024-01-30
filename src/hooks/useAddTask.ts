import { FormEvent, useContext } from "react";
import { TaskStateContext } from "../context/TaskStateContext";
import { UserContext } from "../context/UserContext";
import { addTask } from "../helpers/addTask";
import { UtilitiesContext } from "../context/UtilitiesContext";

export function useAddTask() {
  //Gets dispatch to update task's state
  const { dispatch } = useContext(TaskStateContext);

  //User info
  const userContext = useContext(UserContext);
  const user = userContext?.user;

  //Navigator
  const { navigateTo } = useContext(UtilitiesContext);

  //Executes (when it's used) addTask
  const handleSubmitAddTask = (e: FormEvent<HTMLFormElement>) =>
    addTask(e, dispatch, navigateTo, user);

  return { handleSubmitAddTask };
}
