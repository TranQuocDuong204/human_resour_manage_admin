import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaFlipboard } from "react-icons/fa6";
const data = [1];
interface IPropsBoardCard {
  dataColumns: any
}
const BoardCard = ({dataColumns}: IPropsBoardCard) => {
  return (
    <section className="">
      {" "}
      <div className={`w-[272px] max-h-full flex flex-col justify-between  cursor-pointer bg-slate-50 shadow-lg   p-2 rounded-md  `}>
        <div className=" flex relative grow-0 items-start justify-between p-2 mb-1">
          <h3 className=" text-base font-semibold">{dataColumns.column_name}</h3>
          <span className=" cursor-pointer">
            <MdMoreHoriz />
          </span>
        </div>
        <ul className=" max-h-[406px]  flex  gap-2 flex-col flex-nowrap mx-[4px]  overflow-y-auto ">
          {data.map((item, index) => (
            <li
              key={index}
              className=" w-full p-2 bg-white rounded-md break-words flex-grow-0 "
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex items-center  gap-1   mt-2 rounded-md">
          <div className=" flex items-center gap-1 p-2 hover:bg-slate-300  rounded-md basis-[90%] ">
            <FaPlus className=" text-xs" />
            <span className=" text-sm font-semibold">Add a project</span>
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
