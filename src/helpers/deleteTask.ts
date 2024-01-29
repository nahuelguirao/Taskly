import { ActionStructure, UUID } from "../vite-env";

export async function deleteTask(
  uuid: UUID,
  dispatch: (action: ActionStructure) => void,
  user: any
) {
  const action: ActionStructure = {
    type: "DELETE TASK",
    payload: uuid,
  };

  if (user == undefined) {
    dispatch(action);
  } else {
    try {
      fetch(`http://127.0.0.1:8000/delete_task/${uuid}/`, {
        method: "DELETE",
      });
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  }
}
