import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
const TaskItem = ({ item }: any) => {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
      isDragging,
    } = useSortable({ id: item.id, data: { ...item } });
  
    const style = {
      // using touch action = none handle agian above mobile
      touchAction: "none",
  
      transform: CSS.Translate.toString(transform),
      transition,
      height: "100%",
      opacity: isDragging ? 0.5 : undefined,
    };
  return (
    <li
    ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
    className=" w-full p-2 bg-white rounded-md break-words flex-grow-0  ">
      {item?.cover && (
        <img
          src={item?.cover}
          alt={item?.title}
          className="w-full rounded-md py-1"
        />
      )}
      {item?.title}
    </li>
  );
};

export default TaskItem;
