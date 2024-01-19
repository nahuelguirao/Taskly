import { ActionStructure, Task, TaskList } from "../vite-env";
import { format } from "date-fns";

export const taskReducer = (state: TaskList, action: ActionStructure) => {
  switch (action.type) {
    case "ADD TASK":
      const { title = "", description = "" } = action.payload;

      if (title.length > 1) {
        let newTask: Task = {
          id: crypto.randomUUID(),
          title: title,
          description: description,
          date: format(new Date(), "EEEE, MMMM do"),
        };

        return [...state, newTask];
      }

      return state;

    case "DELETE TASK":
      const id = action.payload;
      const newState = state.filter((task) => task.id != id);
      return newState;

    default:
      return state;
  }
};
