import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
  Dispatch,
} from "react";
import { useFetchUsersTasks } from "../hooks/useFetchUsersTasks";
import { taskReducer } from "../reducer/taskReducer";
import { UserContext } from "./UserContext";
import { Task } from "../types/generalTypes";
import { ActionStructure } from "../vite-env";

//USER'S TASKS CONTEXT
interface TaskStateContextProps {
  taskState: Task[];
  dispatch: Dispatch<ActionStructure>;
}

export const TaskStateContext = createContext<TaskStateContextProps | null>(
  null
);

//USER'S TASKS PROVIDER
interface TaskStateProviderProps {
  children: ReactNode;
}

export const TaskStateProvider = ({ children }: TaskStateProviderProps) => {
  //Gets the user
  const userContext = useContext(UserContext);
  const user = userContext?.user;

  //Tries to get saved tasks
  const storedTask = localStorage.getItem("tasks");

  //If there are any task the state are those, if not it's an empty array
  const initialState = storedTask ? JSON.parse(storedTask) : [];

  //Taskstate managed by the useReducer
  const [taskState, dispatch] = useReducer(taskReducer, initialState);

  //Fetch tasks if user is loged in
  useEffect(() => {
    useFetchUsersTasks(user, dispatch);
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
