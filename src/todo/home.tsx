import { Label, Pivot, PivotItem, Stack } from "@fluentui/react";
import React, { createContext, useState } from "react";
import HomeStyle from "./home.style";
import TaskList from "./list/taskList";
import todoString from "./string.json";
import { ITask, PivotKeysEnum } from "./types";

import { initializeIcons } from "@fluentui/font-icons-mdl2";
import TodoProvider from "./todoProvider";
import TaskForm from "./taskForm/taskForm";
initializeIcons();

const Home = () => {
  const [selectedKey, setSelectedKey] = useState<string>(PivotKeysEnum.tasks);
  const [editTaskId, setEditTaskId] = useState<string | null>(null);

  return (
    <Stack className={HomeStyle.todoContainer}>
      <TodoProvider>
        <header className={HomeStyle.headerStyle}>
          <h2>{todoString.header}</h2>
        </header>

        <Stack className={HomeStyle.pivotContainer}>
          <Pivot
            selectedKey={String(selectedKey)}
            styles={{ root: HomeStyle.pivotRoot }}
            onLinkClick={(item?: PivotItem) => {
              setSelectedKey(item?.props.itemKey || PivotKeysEnum.tasks);
            }}
          >
            <PivotItem
              headerText={todoString.pivots.tasksTab}
              itemKey={PivotKeysEnum.tasks}
            >
              <TaskList setEditTask={setEditTaskId} />
            </PivotItem>

            <PivotItem
              headerText={todoString.pivots.taskFormTab}
              itemKey={PivotKeysEnum.taskForm}
            >
              <TaskForm editTaskId={editTaskId} />
            </PivotItem>

            <PivotItem
              headerText={todoString.pivots.compleatedTaskTab}
              itemKey={PivotKeysEnum.Completed}
            >
              <Label>Pivot #3</Label>
            </PivotItem>
          </Pivot>
        </Stack>
      </TodoProvider>
    </Stack>
  );
};

export default Home;
