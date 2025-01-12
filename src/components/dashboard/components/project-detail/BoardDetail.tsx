"use client";
import React, { useEffect } from "react";
import BoardCard from "./components/BoardCard";
import { FaPlus } from "react-icons/fa";
import { useDragScroll } from "@/hooks/useDragScroll";
import { sortArry } from "@/utils/sortArraybyanotherArray";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
} from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
  arrayMove,

} from "@dnd-kit/sortable";
interface IPropsPageDedailProject {
  dataColumns: { columns: any[] }[];
}
interface IPropActiveDragItem {
  COLUMN: string;
  TASK: string;
}
const ACTIVE_DRAG_ITEM_TYPE: IPropActiveDragItem = {
  COLUMN: "ACTIVE_DRAG_ITEM_TYPE_COLUMN",
  TASK: "ACTIVE_DRAG_ITEM_TYPE_TASK",
};
const BoardDetail = ({ dataColumns }: IPropsPageDedailProject) => {
  const [ref] = useDragScroll();
  const [orderedColumns, setOrderedColumns] = React.useState([]);
  const [activeId, setActiveId] = React.useState(null);
  const [activeType, setActiveType] = React.useState<string | null>(null);
  const [activeData, setActiveData] = React.useState(null);
  // Fix dndkit error when clicking on a column still  called event in funciton HandleDragEnd
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });
  const sensor = useSensors(pointerSensor);

  useEffect(() => {
    const orderedColumn: any = sortArry(
      dataColumns?.columns,
      dataColumns?.columnOrderIds,
      "id"
    );

    setOrderedColumns(orderedColumn);
  }, [dataColumns]);

  const handleDragEnd = (e: any) => {
    const { active, over } = e;

    if (!over) return;
    if (active?.id !== over?.id) {
      const oldIndex = orderedColumns.findIndex(
        (item: any) => item.id === active.id
      );
      const newIndex = orderedColumns.findIndex(
        (item: any) => item.id === over.id
      );
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex);
      setOrderedColumns(dndOrderedColumns);
    }
    setActiveId(null);
    setActiveType(null);
    setActiveData(null);
  };

  function handleDragStart(event: any) {
    setActiveId(event.active.id);
    setActiveType(
      event?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_ITEM_TYPE.TASK
        : ACTIVE_DRAG_ITEM_TYPE.COLUMN
    );
    setActiveData(event?.active?.data?.current);
  }

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  };
  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      sensors={sensor}
    >
      <div
        ref={ref}
        className="  flex min-h-[536px] w-full    gap-2  mt-3 bg-gradient-to-r
  from-[#fde68a] to-[#f59e0b] p-3 rounded-md overflow-x-auto "
      >
        <SortableContext
          items={orderedColumns?.map((item: any) => item.id)}
          strategy={horizontalListSortingStrategy}
        >
          {orderedColumns.map((item: any, index: number) => (
            <BoardCard key={index} dataColumns={item} />
          ))}
        </SortableContext>
        {/* overlay drag item shawdow */}
        <DragOverlay dropAnimation={dropAnimation}>
          {(!activeId || !activeType) && null}
          {activeId && activeType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
            <BoardCard dataColumns={activeData} />
          )}
        </DragOverlay>
        <div className=" items-start cursor-pointer transition-all ">
          <div className="w-[272px]  flex items-center gap-1 p-2 bg-[#ffffff3d] hover:bg-[#ffffff60]  rounded-md  ">
            <FaPlus className=" text-xs text-white" />
            <span className=" text-sm font-semibold text-white">
              Add another list
            </span>
          </div>
        </div>
      </div>
    </DndContext>
  );
};

export default BoardDetail;
