import { createContext, useContext, useEffect, useReducer } from "react";
import { taskReducer } from "../reducer/taskReducer";
import { UserContext } from "./UserContext";

//USER'S TASK CONTEXT
export const TaskStateContext = createContext<any>([]);

export const TaskStateProvider = ({ children }: any) => {
  const { user } = useContext(UserContext);

  //Tries to get saved tasks
  const storedTask = localStorage.getItem("tasks");

  //If there are any task the state are those, if not it's an empty array
  const initialState = storedTask ? JSON.parse(storedTask) : [];

  //Taskstate managed by the useReducer
  const [taskState, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    const fetchUserTasks = async () => {
      try {
        if (user !== undefined) {
          localStorage.removeItem("tasks");
          const response = await fetch(
            `http://127.0.0.1:8000/get_tasks/user/${user.id}/`
          );
          const result = await response.json();
          dispatch({ type: "FETCH TASKS", payload: result });
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserTasks();
  }, [user]);

  //Sets the taskState in the local storage
  useEffect(() => {
    if (user == undefined) {
      localStorage.setItem("tasks", JSON.stringify(taskState));
    }
  }, [taskState]);

  return (
    <TaskStateContext.Provider value={{ taskState, dispatch }}>
      {children}
    </TaskStateContext.Provider>
  );
};
