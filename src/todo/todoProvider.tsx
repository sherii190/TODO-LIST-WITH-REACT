import React, { createContext, useReducer } from "react";
import { ActionTypeEnum, IAddAction, ITask, ITodoContext, ITodoState } from "./types";

export const TodoContext = createContext<ITodoContext>({
  activeTasks: [],
  dispatch: () => {},
});

type Props = {
  children: React.ReactNode;
};

const reducer = (state: ITodoState, action: IAddAction) => {
  switch (action.type) {
    case ActionTypeEnum.add:
      const { data } = action;
      data.id = new Date().toJSON();
      return { ...state, activeTasks: [action.data, ...state.activeTasks] };
  }
  return { ...state };
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

  const data = { activeTasks: tasks };
  const [state, dispatch] = useReducer(reducer, data);

  return (
    <TodoContext.Provider value={{ activeTasks: state.activeTasks, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
