import { Label, Pivot, PivotItem, Stack } from "@fluentui/react";
import React, { createContext, useState } from "react";
import HomeStyle from "./home.style";
import TaskList from "./list/taskList";
import todoString from "./string.json";
import { ITask, PivotKeysEnum } from "./types";

import { initializeIcons } from "@fluentui/font-icons-mdl2";
import TodoProvider from "./todoProvider";
import TaskForm from "./taskForm/taskForm";
import CompletedTaskList from "./list/CompletedTaskList";
initializeIcons();

const Home = () => {
  const [selectedKey, setSelectedKey] = useState<string>(PivotKeysEnum.tasks);
  const [editTaskId, setEditTaskId] = useState<string | null>(null);

  const editTask = (id: string) => {
    setEditTaskId(id)
    setSelectedKey(PivotKeysEnum.taskForm)
  }
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
              if (item?.props.itemKey !== PivotKeysEnum.taskForm) {
                setEditTaskId(null);
              }
              setSelectedKey(item?.props.itemKey || PivotKeysEnum.tasks);
            }}
          >
            <PivotItem
              headerText={todoString.pivots.tasksTab}
              itemKey={PivotKeysEnum.tasks}
            >
              <TaskList setEditTask={editTask} />
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
              <CompletedTaskList />
            </PivotItem>
          </Pivot>
        </Stack>
      </TodoProvider>
    </Stack>
  );
};

export default Home;
