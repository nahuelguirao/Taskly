import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Task } from "../../vite-env";
import { deleteTask } from "../../helpers/deleteTask";

interface MappedTaskProps {
  navigateToAddTask: () => void;
  taskState: Task[];
  dispatch: () => void;
}

export function MappedTasks({
  navigateToAddTask,
  taskState,
  dispatch,
}: MappedTaskProps) {
  return (
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
              <RiDeleteBin6Line
                className="deleteButton"
                onClick={() => task.id && deleteTask(task.id, dispatch)}
              />
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
  );
}
