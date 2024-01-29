type UUID = `${string}-${string}-${string}-${string}`;

type ActionType =
  | "ADD TASK"
  | "DELETE TASK"
  | "EDIT TASK"
  | "FETCH TASKS"
  | "LOGOUT";

export type Task = {
  uuid: UUID;
  title: string;
  description: string;
  date: string;
};

export type User = {
  id: number;
  username: string;
  token: string;
};

export type ActionStructure = {
  type: ActionType;
  payload: any;
};
