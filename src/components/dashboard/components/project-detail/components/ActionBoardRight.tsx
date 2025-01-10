import React from "react";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { IoFlashOutline } from "react-icons/io5";
import { IoFilterSharp } from "react-icons/io5";
import { TbUserPlus } from "react-icons/tb";
import { MdMoreHoriz } from "react-icons/md";
import { Button } from "@/components/ui/button";
const ActionBoardRight = () => {
  return (
    <div className="flex items-center gap-2">
      <ul className="flex items-center gap-2">
        <li className="p-2 hover:bg-white rounded-md cursor-pointer transition-colors duration-300 ease-in-out">
          <MdOutlineRocketLaunch />
        </li>
        <li className="p-2 hover:bg-white rounded-md cursor-pointer transition-colors duration-300 ease-in-out">
          <IoFlashOutline />
        </li>
      </ul>
      <Button className="flex items-center group hover:bg-white transition-colors duration-300 ease-in-out">
        <IoFilterSharp className="group-hover:text-black transition-colors duration-300 ease-in-out" />
        <span className="group-hover:text-black transition-colors duration-300 ease-in-out">
          Filter
        </span>
      </Button>

      <Button className="flex items-center group hover:bg-white transition-colors duration-300 ease-in-out">
        <TbUserPlus className="group-hover:text-black transition-colors duration-300 ease-in-out" />
        <span className="group-hover:text-black transition-colors duration-300 ease-in-out">
          Share
        </span>
      </Button>
      <Button>
        <MdMoreHoriz />
      </Button>
    </div>
  );
};

export default ActionBoardRight;
