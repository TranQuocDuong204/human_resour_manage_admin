import React from "react";
import { Button } from "@/components/ui/button";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { FiPlus } from "react-icons/fi";

const ProjectAction = () => {
  return (
    <div className="flex items-center flex-col">
      <div className=" flex items-center gap-2">
        <Button className=" bg-white group ">
          <HiOutlineAdjustmentsHorizontal className=" text-black text-lg group-hover:text-white" />
        </Button>

        <Button>
          <FiPlus />
          Create Project
        </Button>
      </div>

     
    </div>
  );
};

export default ProjectAction;
