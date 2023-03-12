import {
  MessageBar,
  MessageBarType,
  PrimaryButton,
  Stack,
  TextField,
} from "@fluentui/react";
import React from "react";
import useInput from "./useInputs";

const TaskForm = () => {
  const title = useInput("");
  const description = useInput("");

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  } 
  return (
    <form onSubmit={onFormSubmit}>
      <TextField label="Title" required {...title} />
      <TextField label="Description" multiline rows={4} {...description} />

      <Stack horizontal tokens={{ childrenGap: 20 }} style={{ marginTop: 20 }}>
        <Stack style={{ width: "80%" }}>
          <MessageBar messageBarType={MessageBarType.success}>
            Task Added
          </MessageBar>
        </Stack>

        <Stack style={{ width: "20%" }}>
          <PrimaryButton type="submit" text="Add Task" />
        </Stack>
      </Stack>
    </form>
  );
};

export default TaskForm;
