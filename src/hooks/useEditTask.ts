import { FormEvent, useContext } from "react";
import { TaskStateContext } from "../context/TaskStateContext";
import { UserContext } from "../context/UserContext";
import { editTask } from "../helpers/editTask";
import { Task } from "../types/generalTypes";
import { UtilitiesContext } from "../context/UtilitiesContext";

export function useEditTask(uuid: any) {
  //Tasks state
  const { taskState, dispatch } = useContext(TaskStateContext);

  //User info
  const userContext = useContext(UserContext);
  const user = userContext?.user;

  //Gets the filtered task from the taskState context
  const filteredTask = taskState.find((task: Task) => task.uuid == uuid);

  if (!filteredTask) {
    return undefined;
  }

  //To navigator
  const { navigateTo } = useContext(UtilitiesContext);

  //Executes 'edit task' when it's called
  const handleEditTask = (e: FormEvent<HTMLFormElement>) =>
    editTask(filteredTask, e, dispatch, navigateTo, user);

  return { filteredTask, handleEditTask };
}
