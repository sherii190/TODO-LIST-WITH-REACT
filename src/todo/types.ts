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
}

export interface IAddAction {
  type: ActionTypeEnum.add;
  data: ITask;
}
