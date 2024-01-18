import { useContext } from "react";
import { TaskStateContext } from "../context/TaskStateContext";
import { addTask } from "../helpers/addTask";
import { useNavigate } from "react-router-dom";
import "../styles/addTask.css";

export function AddTask() {
  const { dispatch } = useContext(TaskStateContext);
  const navigateTo = useNavigate();

  const handleSubmitAddTask = (e: any) => addTask(e, dispatch, navigateTo);

  return (
    <main className="mainAddTask">
      <form onSubmit={handleSubmitAddTask}>
        <h3>Add a new task!</h3>
        <div className="inputBox">
          <input
            placeholder="Do homework, study..."
            type="text"
            name="title"
            required
          />
          <span>Task's title </span>
        </div>
        <div className="inputBox">
          <textarea placeholder="Do homework, study..." name="description" />
          <span>Task's description * </span>
        </div>
        <p>
          * <span>Optional</span>
        </p>
        <button className="addTaskButton">Add task</button>
      </form>
    </main>
  );
}
