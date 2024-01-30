import { useAddTask } from "../hooks/useAddTask";
import "../styles/addTask.css";

export function AddTask() {
  const { handleSubmitAddTask } = useAddTask();

  return (
    <main className="mainAddTask">
      <form onSubmit={handleSubmitAddTask} method="POST">
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
