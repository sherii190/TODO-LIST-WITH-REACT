export enum PivotKeysEnum {
  tasks = "tasks",
  taskForm = "taskForm",
  Completed = "Completedtasks",
}
export interface ITask {
  id: string;
  title: string,
  isFave: boolean,
}