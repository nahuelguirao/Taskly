import { useContext, useEffect } from "react";
import { TaskStateContext } from "../context/TaskStateContext";
import { FormErrorContext } from "../context/FormErrorContext";
import { useNavigate } from "react-router-dom";
import { editTask } from "../helpers/editTask";
import { Task } from "../vite-env";

export function useEditTask(UUID: any) {
  //Contexts
  const { taskState, dispatch } = useContext(TaskStateContext);
  const { error, setError } = useContext(FormErrorContext);

  //Gets the filtered task from the taskState context
  const filteredTask = taskState.find((task: Task) => task.id == UUID);

  //To navigate
  const navigate = useNavigate();

  //Function to handle submit after editing
  const handleEditTask = (e: any) =>
    editTask(filteredTask, e, dispatch, navigate, setError);

  //Resets the global form-error once each time the user enters in 'edit task'
  useEffect(() => {
    setError("");
  }, []);

  return { error, filteredTask, handleEditTask };
}
