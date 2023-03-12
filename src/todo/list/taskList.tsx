import { Checkbox, FontIcon, mergeStyles, Stack } from "@fluentui/react";
import React, { useContext } from "react";
import { TodoContext } from "../todoProvider";
import { ActionTypeEnum, ITask } from "../types";
import TaskListStyle from "./taskList.style";
import todoString from "../string.json";
import TaskDescription from "./taskDescription";

const TaskList = () => {
  const { activeTasks, dispatch } = useContext(TodoContext);

  const onTaskDelete = (id: string) => {
    if (window.confirm(todoString.deleteConfirm)) {
      dispatch({ type: ActionTypeEnum.delete, data: { id } });
    }
  };

  const onFavoriteClick = (id: string) => {
    dispatch({ type: ActionTypeEnum.ToggleFavorite, data: { id } });
  };

  const onRenderCell = (task: ITask) => {
    return (
      <Stack horizontal key={task.id} className={TaskListStyle.taskItem}>
        <Stack horizontal style={{ width: "85%" }}>
          <Checkbox />
          {task.title}
        </Stack>
        <Stack horizontal style={{ width: "15%" }}>
          <TaskDescription task={task} />
          <FontIcon
            iconName={task.isFave ? "FavoriteStarFill" : "FavoriteStar"}
            className={
              task.isFave
                ? mergeStyles(TaskListStyle.iconStyle, { color: "blue" })
                : TaskListStyle.iconStyle
            }
            onClick={() => onFavoriteClick(task.id)}
          />
          <FontIcon iconName="EditNote" className={TaskListStyle.iconStyle} />
          <FontIcon
            iconName="Delete"
            className={TaskListStyle.iconStyle}
            onClick={() => onTaskDelete(task.id)}
          />
        </Stack>
      </Stack>
    );
  };
  return <div>{activeTasks.map(onRenderCell)}</div>;
};

export default TaskList;
