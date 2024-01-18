import { createContext, useReducer } from "react";
import { taskReducer } from "../reducer/taskReducer";

//USER'S TASK CONTEXT
export const TaskStateContext = createContext<any>([]);

export const TaskStateProvider = ({ children }: any) => {
  const [taskState, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskStateContext.Provider value={{ taskState, dispatch }}>
      {children}
    </TaskStateContext.Provider>
  );
};
