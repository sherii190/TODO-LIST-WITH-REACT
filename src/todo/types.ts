import { Dispatch } from "react";

export enum PivotKeysEnum {
  tasks = "tasks",
  taskForm = "taskForm",
  Completed = "Completedtasks",
}
export interface ITask {
  id: string;
  title: string;
  description?: string;
  isFave: boolean;
}

export interface ITodoContext {
  activeTasks: ITask[];
  dispatch: React.Dispatch<any>;
}

export interface ITodoState {
  activeTasks: ITask[];
}

export enum ActionTypeEnum {
  add,
  delete,
  ToggleFavorite,
  Update,
}

export type IReducerAction = IAddAction | IDeleteAction | IToggleFavoriteAction | IUpdateAction;

export interface IAddAction {
  type: ActionTypeEnum.add;
  data: ITask;
}

export interface IDeleteAction {
  type: ActionTypeEnum.delete;
  data: { id: string };
}

export interface IToggleFavoriteAction {
  type: ActionTypeEnum.ToggleFavorite;
  data: { id: string };
}

export interface IUpdateAction {
  type: ActionTypeEnum.Update;
  data: ITask;
}
