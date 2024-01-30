import { ActionStructure, Task } from "../types/generalTypes";

export const taskReducer = (state: Task[], action: ActionStructure) => {
  switch (action.type) {
    // -------
    case "ADD TASK":
      return [...state, action.payload];

    // -------

    case "DELETE TASK":
      const id = action.payload;
      const newState = state.filter((task) => task.uuid != id);
      return newState;

    // -------

    case "EDIT TASK":
      const editedTask = action.payload;

      return state.map((task) =>
        task.uuid === editedTask.uuid ? { ...task, ...editedTask } : task
      );

    // -------

    case "FETCH TASKS":
      return action.payload;

    // -------

    case "LOGOUT":
      return [];

    // -------

    default:
      return state;
  }
};
