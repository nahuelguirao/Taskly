/// <reference types="vite/client" />

//Menu mobile
export type MenuToggle = {
  isMenuOpen: boolean;
  handleMenuToggle: () => void;
};

//Crypto ID
export type UUID = `${string}-${string}-${string}-${string}`;

//Reducer cases
export type ReducerActions = "ADD TASK" | "DELETE TASK" | "EDIT TASK";

//Type of the action sent to the reducer
export type ActionStructure = {
  type: ReducerActions;
  payload: any;
};

//Type of task without login
export type Task = {
  id?: UUID;
  title: string;
  description: string;
  date?: string;
};

//Type of an array of Task (without login)
export type TaskList = Task[];

//Type for a new user
export type NewUser = {
  username: string;
  email: string;
  password: string;
};

//User credentials type
export type UserCredentials = {
  username: string;
  password: string;
};

export type LogedUser = {
  id: number;
  username: string;
};
