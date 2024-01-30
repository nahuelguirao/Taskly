import { Dispatch, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { deleteTask } from "../../helpers/deleteTask";
import { ActionStructure, Task } from "../../types/generalTypes";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

interface MappedTaskProps {
  navigateTo: (route: string) => void;
  taskState: Task[];
  dispatch: Dispatch<ActionStructure>;
}

export function MappedTasks({
  navigateTo,
  taskState,
  dispatch,
}: MappedTaskProps) {
  //Gets user data
  const userContext = useContext(UserContext);
  const user = userContext?.user;

  return (
    <main className="mainTasks">
      <h4 className="addNewTaskH4 card">
        Add a new task by clicking
        <span className="spanOrange" onClick={() => navigateTo("/addTask")}>
          HERE!
        </span>
      </h4>
      <section className="cardContainer">
        {taskState.map((task: Task) => (
          <div className="card" key={task.uuid}>
            <div className="cardHeader">
              <h3>{task.title}</h3>
              <RiDeleteBin6Line
                className="deleteButton"
                onClick={() =>
                  task.uuid && deleteTask(task.uuid, dispatch, user)
                }
              />
            </div>
            <p className="description">
              {task.description.length == 0
                ? "This task has no description!"
                : task.description}
            </p>
            <div className="dateContainer">
              <div>
                <CiEdit
                  className="editButton"
                  onClick={() => navigateTo(`/task/${task.uuid}`)}
                />
              </div>
              <p className="date">{task.date}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
