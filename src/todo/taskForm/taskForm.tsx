import {
  MessageBar,
  MessageBarType,
  PrimaryButton,
  Stack,
  TextField,
} from "@fluentui/react";
import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../todoProvider";
import { ActionTypeEnum, ITask } from "../types";
import useInput from "./useInputs";
import todoString from "../string.json";

type Props = {
  editTaskId: string | null;
};
const TaskForm = ({ editTaskId }: Props) => {
  const { activeTasks, dispatch } = useContext(TodoContext);

  const title = useInput("");
  const description = useInput("");

  useEffect(() => {
    if (editTaskId) {
      const taskData = activeTasks.find((task) => task.id === editTaskId);
      title.set(taskData?.title || "");
      description.set(taskData?.description || "");
    }
  }, [editTaskId]);

  const [showMessage, setShowMessage] = useState<{
    type: MessageBarType;
    message: string;
  }>({ type: MessageBarType.success, message: "" });

  useEffect(() => {
    if (showMessage.message) {
      setTimeout(() => {
        setShowMessage({ type: MessageBarType.success, message: "" });
      }, 1000);
    }
  }, [showMessage.message]);

  const addTaskAction = () => {
    const data: ITask = {
      id: "",
      title: title.value,
      description: description.value,
      isFave: false,
    };
    dispatch({ type: ActionTypeEnum.add, data });
    setShowMessage({ type: MessageBarType.success, message: "Task Added" });
    title.set("");
    description.set("");
  };

  const updateTaskAction = () => {
    const taskData = activeTasks.find((task) => task.id === editTaskId);
    if (taskData) {
      const data: ITask = {
        id: taskData.id || "",
        title: title.value,
        description: description.value,
        isFave: taskData.isFave || false,
      };
      dispatch({ type: ActionTypeEnum.Update, data });
      setShowMessage({ type: MessageBarType.success, message: "Task Updated" });
    } else {
      setShowMessage({
        type: MessageBarType.error,
        message: "Error while updating task",
      });
    }
  };
  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    editTaskId ? updateTaskAction() : addTaskAction();
  };
  return (
    <form onSubmit={onFormSubmit}>
      <TextField label="Title" required {...title} />
      <TextField label="Description" multiline rows={4} {...description} />

      <Stack horizontal tokens={{ childrenGap: 20 }} style={{ marginTop: 20 }}>
        <Stack style={{ width: "80%" }}>
          {showMessage.message && (
            <MessageBar messageBarType={MessageBarType.success}>
              {showMessage.message}
            </MessageBar>
          )}
        </Stack>

        <Stack style={{ width: "20%" }}>
          <PrimaryButton
            type="submit"
            text={editTaskId ? todoString.updateTaskbtn : todoString.addTaskBtn}
          />
        </Stack>
      </Stack>
    </form>
  );
};

export default TaskForm;
