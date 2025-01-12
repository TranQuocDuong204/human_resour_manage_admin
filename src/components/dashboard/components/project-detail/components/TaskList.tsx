import React from "react";
import TaskItem from "./TaskItem";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
const TaskList = ({ taskList }: any) => {


  return (
    <SortableContext
      strategy={verticalListSortingStrategy}
      items={taskList.map((item: any) => item.id)}
    >
      <ul className=" max-h-[406px]  flex  gap-2 flex-col flex-nowrap mx-[4px]  overflow-y-auto overflow-x-hidden">
        {taskList?.map((item: any, index: number) => (
          <TaskItem key={index} item={item} />
        ))}
      </ul>
    </SortableContext>
  );
};

export default TaskList;
