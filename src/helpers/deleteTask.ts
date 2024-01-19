import { ActionStructure, UUID } from "../vite-env";

export function deleteTask(id: UUID, dispatch: any) {
  const action: ActionStructure = {
    type: "DELETE TASK",
    payload: id,
  };

  dispatch(action);
}
