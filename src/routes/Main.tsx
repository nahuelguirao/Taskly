import { useContext } from "react";
import { TaskStateContext } from "../context/TaskStateContext";
import { WaitingForTask } from "../components/Main/WaitingForTask";
import { MappedTasks } from "../components/Main/MappedTasks";
import { UtilitiesContext } from "../context/UtilitiesContext";
import "../styles/main.css";

export function Main() {
  //Gets tasks state
  const { taskState, dispatch } = useContext(TaskStateContext);
  //Navigator
  const utilitiesContext = useContext(UtilitiesContext);
  const navigateTo = utilitiesContext?.navigateTo;

  return (
    <>
      {taskState.length === 0 ? (
        <WaitingForTask navigateTo={navigateTo} />
      ) : (
        <MappedTasks
          navigateTo={navigateTo}
          taskState={taskState}
          dispatch={dispatch}
        />
      )}
    </>
  );
}
