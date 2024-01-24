import { ActionStructure, UUID } from "../vite-env";

export function deleteTask(
  id: UUID,
  dispatch: (action: ActionStructure) => void
) {
  const action: ActionStructure = {
    type: "DELETE TASK",
    payload: id,
  };

  dispatch(action);
}
