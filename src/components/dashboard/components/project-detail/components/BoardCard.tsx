import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaFlipboard } from "react-icons/fa6";
import TaskList from "./TaskList";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
interface IPropsBoardCard {
  dataColumns: any;
}
const BoardCard = ({ dataColumns }: IPropsBoardCard) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: dataColumns.id, data: { ...dataColumns } });

  const style = {
    // using touch action = none handle agian above mobile
    touchAction: "none",
    transform: CSS.Translate.toString(transform),
    transition,
    height: "510px",
    opacity: isDragging ? 0.5 : undefined,
  };
  return (
    <section ref={setNodeRef} style={style} {...attributes}>
      {" "}
      <div
        {...listeners}
        className={`w-[272px] flex flex-col justify-between  cursor-pointer bg-slate-50 shadow-lg   p-2 rounded-md  `}
      >
        <div className=" flex relative grow-0 items-start justify-between p-2 mb-1">
          <h3 className=" text-base font-semibold">{dataColumns?.title}</h3>
          <span className=" cursor-pointer">
            <MdMoreHoriz />
          </span>
        </div>
        <TaskList taskList={dataColumns?.tasks} />

        <div className="h-full flex items-end  gap-1 grow-0   mt-2 rounded-md">
          <div className=" flex items-center gap-1 p-2 hover:bg-slate-300  rounded-md basis-[90%] ">
            <FaPlus className=" text-xs" />
            <span className=" text-sm font-semibold">Add a new task</span>
          </div>

          <span className="p-2  hover:bg-slate-300 rounded-md md basis-[10%">
            <FaFlipboard className=" text-sm" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default BoardCard;
