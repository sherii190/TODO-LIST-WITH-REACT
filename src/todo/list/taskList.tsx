import { Checkbox, FontIcon, Stack, } from '@fluentui/react';
import React from 'react';
import TaskListStyle from './taskList.style';

interface ITask {
  id: string;
  title: string,
}

const taskList = () => {
  const tasks: ITask[] = [
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
    return (
      <Stack horizontal key={task.id} className={TaskListStyle.taskItem}>
        <Stack horizontal style={{width : "85%"}}>
          <Checkbox />
          {task.title}
        </Stack>
        <Stack horizontal style={{width : "15%"}}>
          <FontIcon iconName="CompassNW" className={TaskListStyle.iconStyle} />
        </Stack>
      </Stack>
    );
  }
  return <div>{tasks.map((onRenderCell))}</div>;
};

export default taskList;