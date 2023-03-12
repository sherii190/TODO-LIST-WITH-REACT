import {
  MessageBar,
  MessageBarType,
  PrimaryButton,
  Stack,
  TextField,
} from "@fluentui/react";
import React from "react";

const taskForm = () => {
  return (
    <Stack>
      <TextField label="Title" required />
      <TextField label="Description" multiline rows={4} />

      <Stack horizontal tokens={{ childrenGap: 20}} style={{marginTop: 20}}>
        <Stack style={{ width: "80%"}}>
          <MessageBar messageBarType={MessageBarType.success}>
            Task Added
          </MessageBar>
        </Stack>

        <Stack style={{ width: "20%" }}>
          <PrimaryButton text="Add Task" />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default taskForm;
