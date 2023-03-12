import { Checkbox, FontIcon, Stack, } from '@fluentui/react';
import React, { useContext } from 'react';
import { todoContext } from '../home';
import { ITask } from '../types';
import TaskListStyle from './taskList.style';



const taskList = () => {
  
  
  const { activeTasks } = useContext (todoContext);

  const onRenderCell = (task: ITask) => {
    return (
      <Stack horizontal key={task.id} className={TaskListStyle.taskItem}>
        <Stack horizontal style={{width : "85%"}}>
          <Checkbox />
          {task.title}
        </Stack>
        <Stack horizontal style={{width : "15%"}}>
          <FontIcon iconName="Info" className={TaskListStyle.iconStyle} />
          <FontIcon iconName={task.isFave ? "FavoriteStarFill" : "FavoriteStar"} className={TaskListStyle.iconStyle} />
          <FontIcon iconName="EditNote" className={TaskListStyle.iconStyle} />
          <FontIcon iconName="Delete" className={TaskListStyle.iconStyle} />
          
        </Stack>
      </Stack>
    );
  }
  return <div>{activeTasks.map((onRenderCell))}</div>;
};

export default taskList;