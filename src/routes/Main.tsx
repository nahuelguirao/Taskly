import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TaskStateContext } from "../context/TaskStateContext";
import { WaitingForTask } from "../components/Main/WaitingForTask";
import { MappedTasks } from "../components/Main/MappedTasks";
import "../styles/main.css";

export function Main() {
  const { taskState, dispatch } = useContext(TaskStateContext);
  const navigate = useNavigate();

  const navigateToAddTask = () => {
    navigate("/addTask");
  };

  return (
    <>
      {taskState.length == 0 ? (
        <WaitingForTask navigateToAddTask={navigateToAddTask} />
      ) : (
        <MappedTasks
          navigateToAddTask={navigateToAddTask}
          taskState={taskState}
          dispatch={dispatch}
        />
      )}
    </>
  );
}
