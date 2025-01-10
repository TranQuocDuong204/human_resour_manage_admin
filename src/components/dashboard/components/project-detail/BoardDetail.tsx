"use client";
import React from "react";
import BoardCard from "./components/BoardCard";
import { FaPlus } from "react-icons/fa";
import { useDragScroll } from "@/hooks/useDragScroll";
const data = [1, 2, 3, 5, 6, 7];
interface IPropsPageDedailProject {
  dataColumns: any[];
}
const BoardDetail = ({ dataColumns }: IPropsPageDedailProject) => {
  const [ref] = useDragScroll();
  
  return (
    <div
      ref={ref}
      className=" container flex min-h-[536px]    gap-2  mt-3 bg-gradient-to-r
  from-[#fde68a] to-[#f59e0b] p-3 rounded-md overflow-x-auto "
    >
      {dataColumns.map((item, index) => (
        <BoardCard key={index} dataColumns={item} />
      ))}
      <div className=" items-start cursor-pointer transition-all ">
        <div className="w-[272px]  flex items-center gap-1 p-2 bg-[#ffffff3d] hover:bg-[#ffffff60]  rounded-md  ">
          <FaPlus className=" text-xs text-white" />
          <span className=" text-sm font-semibold text-white">
            Add another list
          </span>
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;
