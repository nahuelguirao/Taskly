import { useContext, useEffect } from "react";
import { FormErrorContext } from "../context/FormErrorContext";
import { TaskStateContext } from "../context/TaskStateContext";
import { useNavigate } from "react-router-dom";
import { addTask } from "../helpers/addTask";

export function useAddTask() {
  const { dispatch } = useContext(TaskStateContext);
  const { error, setError } = useContext(FormErrorContext);
  const navigateTo = useNavigate();

  const handleSubmitAddTask = (e: any) =>
    addTask(e, dispatch, navigateTo, setError);

  useEffect(() => {
    setError("");
  }, []);

  return { error, handleSubmitAddTask };
}
