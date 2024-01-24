import { useEditTask } from "../hooks/useEditTask";
import { useParams } from "react-router-dom";

export function EditTask() {
  //Gets the Task's UUID from the URL
  const { UUID } = useParams();

  const { error, filteredTask, handleEditTask } = useEditTask(UUID);

  return (
    <main className="mainAddTask">
      <form onSubmit={handleEditTask}>
        <h3>Edit Task</h3>
        <div className="inputBox">
          <input
            placeholder="Do homework, study..."
            type="text"
            name="title"
            defaultValue={filteredTask.title}
            required
          />
          <span>Task's title </span>
        </div>
        <div className="inputBox">
          <textarea
            placeholder="Do homework, study..."
            name="description"
            defaultValue={filteredTask.description && filteredTask.description}
          />
          <span>Task's description * </span>
        </div>
        <p>
          * <span>Optional</span>
        </p>
        <button className="addTaskButton">Edit Task</button>
        {error && <p className="errorParagraph">{error}</p>}
      </form>
    </main>
  );
}
