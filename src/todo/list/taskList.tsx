import { Checkbox, FontIcon, Stack } from "@fluentui/react";
import React, { useContext } from "react";
import { TodoContext } from "../todoProvider";
import { ActionTypeEnum, ITask } from "../types";
import TaskListStyle from "./taskList.style";

const TaskList = () => {
  const { activeTasks, dispatch } = useContext(TodoContext);

  const onTaskDelete = (id: string) => {
    dispatch({ type: ActionTypeEnum.delete, data: { id } });
  };
  const onRenderCell = (task: ITask) => {
    return (
      <Stack horizontal key={task.id} className={TaskListStyle.taskItem}>
        <Stack horizontal style={{ width: "85%" }}>
          <Checkbox />
          {task.title}
        </Stack>
        <Stack horizontal style={{ width: "15%" }}>
          <FontIcon iconName="Info" className={TaskListStyle.iconStyle} />
          <FontIcon
            iconName={task.isFave ? "FavoriteStarFill" : "FavoriteStar"}
            className={TaskListStyle.iconStyle}
          />
          <FontIcon iconName="EditNote" className={TaskListStyle.iconStyle} />
          <FontIcon
            iconName="Delete"
            className={TaskListStyle.iconStyle}
            onClick={onTaskDelete}
          />
        </Stack>
      </Stack>
    );
  };
  return <div>{activeTasks.map(onRenderCell)}</div>;
};

export default TaskList;
