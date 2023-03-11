import React from 'react';

interface ITask {
  id: string;
  title: string,
}

const taskList = () => {
  const tasks:  ITask [] = [
    {
      id: "1",
      title: "Task 1",
    },
    {
      id: "2",
      title: "Task 2",
    },
  ];

  const onRenderCell = (task: ITask) => {
    return <div key={task.id}>{task.title}</div>
  }
  return <div>
    {tasks.map((onRenderCell))}
  </div>
};

export default taskList;