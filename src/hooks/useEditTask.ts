import { useContext, useEffect } from "react";
import { TaskStateContext } from "../context/TaskStateContext";
import { FormErrorContext } from "../context/FormErrorContext";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { editTask } from "../helpers/editTask";
import { Task } from "../vite-env";

export function useEditTask(uuid: any) {
  //Contexts
  const { taskState, dispatch } = useContext(TaskStateContext);
  const { error, setError } = useContext(FormErrorContext);
  const { user } = useContext(UserContext);

  //Gets the filtered task from the taskState context
  const filteredTask = taskState.find((task: Task) => task.uuid == uuid);

  //To navigate
  const navigate = useNavigate();

  //Function to handle submit after editing
  const handleEditTask = (e: any) =>
    editTask(filteredTask, e, dispatch, navigate, setError, user);

  //Resets the global form-error once each time the user enters in 'edit task'
  useEffect(() => {
    setError("");
  }, []);

  return { error, filteredTask, handleEditTask };
}
