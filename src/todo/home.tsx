import { Label, Pivot, PivotItem } from '@fluentui/react';
import React, { useState } from 'react';
import HomeStyle from './home.style';
import todoString from './string.json';
import { PivotKeysEnum } from './types';

const Home = () => {

  const [selectedKey, setSelectedKey] = useState<string>(PivotKeysEnum.tasks);

  return <div className={HomeStyle.todoContainer}>
    <header className={HomeStyle.headerStyle}>
      <h2>{todoString.header}</h2>
    </header>

    <div className={HomeStyle.pivotContainer}>
      <Pivot
        selectedKey={String(selectedKey)}
        styles={{ root: HomeStyle.pivotRoot }}
        onLinkClick={(item?: PivotItem) => {
          setSelectedKey(item?.props.itemKey || PivotKeysEnum.tasks);
        }}
      >
        <PivotItem headerText={todoString.pivots.tasksTab} itemKey={PivotKeysEnum.tasks}>
          <Label>Pivot #1</Label>
        </PivotItem>
        <PivotItem headerText={todoString.pivots.taskFormTab} itemKey={PivotKeysEnum.taskForm}>
          <Label>Pivot #2</Label>
        </PivotItem>
        <PivotItem headerText={todoString.pivots.compleatedTaskTab} itemKey={PivotKeysEnum.Completed}>
          <Label>Pivot #3</Label>
        </PivotItem>
      </Pivot>
    </div>
  </div>
};

export default Home;