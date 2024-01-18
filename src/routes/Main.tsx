import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TaskStateContext } from "../context/TaskStateContext";
import { CiEdit } from "react-icons/ci";
import { DeleteTaskButton } from "../components/UI/DeleteTaskButton";
import { Task } from "../vite-env";
import "../styles/main.css";

export function Main() {
  const { taskState } = useContext(TaskStateContext);

  const navigate = useNavigate();

  const navigateToAddTask = () => {
    navigate("/addTask");
  };

  return (
    <>
      {taskState.length == 0 ? (
        <main className="mainWaiting">
          <div className="waitingTaskContainer card">
            <h2 className="addNewTaskH2">
              Add a new
              <span className="spanOrange" onClick={navigateToAddTask}>
                task
              </span>
            </h2>
            <div className="loader"></div>
          </div>
        </main>
      ) : (
        <main className="mainTasks">
          <h4 className="addNewTaskH4 card">
            Add a new task by clicking
            <span className="spanOrange" onClick={navigateToAddTask}>
              HERE!
            </span>
          </h4>
          <section className="cardContainer">
            {taskState.map((task: Task) => (
              <div className="card" key={task.id}>
                <div className="cardHeader">
                  <h3>{task.title}</h3>
                  <DeleteTaskButton />
                </div>
                <p className="description">
                  {task.description.length == 0
                    ? "This task has no description!"
                    : task.description}
                </p>
                <div className="dateContainer">
                  <div>
                    <CiEdit className="editButton" />
                  </div>
                  <p className="date">{task.date}</p>
                </div>
              </div>
            ))}
          </section>
        </main>
      )}
    </>
  );
}
