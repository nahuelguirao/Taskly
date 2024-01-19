import { createContext, useEffect, useReducer } from "react";
import { taskReducer } from "../reducer/taskReducer";

//USER'S TASK CONTEXT
export const TaskStateContext = createContext<any>([]);

export const TaskStateProvider = ({ children }: any) => {
  //Tries to get saved tasks
  const storedTask = localStorage.getItem("tasks");

  //If there are any task the state are those, if not it's an empty array
  const initialState = storedTask ? JSON.parse(storedTask) : [];

  //Taskstate managed by the useReducer
  const [taskState, dispatch] = useReducer(taskReducer, initialState);

  //Sets the taskState in the local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskState));
  }, [taskState]);

  return (
    <TaskStateContext.Provider value={{ taskState, dispatch }}>
      {children}
    </TaskStateContext.Provider>
  );
};
