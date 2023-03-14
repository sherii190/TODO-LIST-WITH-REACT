import {
  Checkbox,
  FontIcon,
  mergeStyles,
  MessageBar,
  Stack,
} from "@fluentui/react";
import React, { useContext } from "react";
import { TodoContext } from "../todoProvider";
import { ActionTypeEnum, ITask } from "../types";
import TaskDescription from "./taskDescription";
import TaskListStyle from "./taskList.style";
import todoString from "../string.json";
const CompletedTaskList = () => {
  const { completedTasks, dispatch } = useContext(TodoContext);

  const onTaskDelete = (id: string) => {
    if (window.confirm(todoString.deleteConfirm)) {
      dispatch({ type: ActionTypeEnum.deleteCompletedTask, data: { id } });
    }
  };

  const onRenderCell = (task: ITask) => {
    return (
      <Stack horizontal key={task.id} className={TaskListStyle.taskItem}>
        <Stack
          horizontal
          style={{ width: "85%" }}
          className={TaskListStyle.disabled}
        >
          <Checkbox disabled />
          <span>{task.title}</span>
        </Stack>
        <Stack horizontal style={{ width: "15%" }}>
          <TaskDescription task={task} />
          <FontIcon
            iconName={task.isFave ? "FavoriteStarFill" : "FavoriteStar"}
            className={mergeStyles(
              TaskListStyle.iconStyle,
              TaskListStyle.disabled
            )}
          />
          <FontIcon
            iconName="Delete"
            className={TaskListStyle.iconStyle}
            onClick={() => onTaskDelete(task.id)}
          />
        </Stack>
      </Stack>
    );
  };
  return (
    <div>
      {completedTasks.length ? (
        completedTasks.map(onRenderCell)
      ) : (
        <MessageBar> No completed task found. </MessageBar>
      )}
    </div>
  );
};

export default CompletedTaskList;
