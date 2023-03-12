import React, { createContext } from "react";
import { ITask } from "./types";

export const TodoContext = createContext<{ activeTasks: ITask[] }>({
  activeTasks: [],
});

type Props = {
  children: React.ReactNode;
};
const TodoProvider = (props: Props) => {
  const tasks: ITask[] = [
    {
      id: "1",
      title: "Task 1",
      isFave: true,
    },
    {
      id: "2",
      title: "Task 2",
      isFave: false,
    },
    {
      id: "3",
      title: "Task 3",
      isFave: true,
    },
  ];

  return (
    <TodoContext.Provider value={{ activeTasks: tasks }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
