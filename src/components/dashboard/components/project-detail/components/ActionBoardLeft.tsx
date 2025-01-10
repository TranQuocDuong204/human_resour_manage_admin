import { Button } from "@/components/ui/button";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { RiGroupLine } from "react-icons/ri";
import { MdLeaderboard } from "react-icons/md";

interface IPropsActionBoardLeft {
  nameProject: string;
}
const ActionBoardLeft = ({ nameProject }: IPropsActionBoardLeft) => {
  return (
    <div className="flex items-center gap-2">
      <h2 className="text-lg font-bold px-2 text-white">{nameProject ? nameProject : "Loading..."}</h2>
      <ul className=" flex items-center gap-2 px-2">
        <li className="cursor-pointer group">
          <FaRegStar className="group-hover:text-white" />
        </li>
        <li className="cursor-pointer group">
          <RiGroupLine className="group-hover:text-white" />
        </li>
      </ul>
      <Button className="flex items-center group hover:bg-white">
        <MdLeaderboard className=" group-hover:text-black" />
        <span className="group-hover:text-black">Board</span>
      </Button>
    </div>
  );
};

export default ActionBoardLeft;
