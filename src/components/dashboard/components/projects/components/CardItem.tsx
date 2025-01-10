import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import React from "react";
import { RiDashboard3Fill } from "react-icons/ri";
import { TiMessage } from "react-icons/ti";
import { GoClock } from "react-icons/go";
import { SiSemanticweb } from "react-icons/si";
import Link from "next/link";

const CardItem = ({ data }: any) => {
  return (
    <Link
      href={`/dashboard/projects/${data.id}`}
      className="relative cursor-pointer w-[calc(30%-2rem)] max-md:w-[calc(50%-2rem)] max-sm:w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl ml-[3rem] mb-[.5rem] mt-8 hover:transition-all duration-300 hover:scale-105 group "
    >
      <div className=" absolute inset-0 bg-[#FFD700] origin-bottom  rounded-xl   transform scale-y-0 transition-transform ease-in-out duration-300 group-hover:scale-y-100 z-0"></div>
      <div className="flex flex-col items-stretch justify-between  px-8 py-2 w-full relative mt-8">
        <div className="w-14 h-14 p-3 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-xl absolute top-[-62px] left-[50%] translate-x-[-50%] flex items-center justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <SiSemanticweb className="text-white text-xl" />
        </div>
        <div>
          <h2 className="text-center text-xl font-semibold group-hover:text-white">
            {data.project_name}
          </h2>
          <p className="group-hover:text-white overflow-hidden whitespace-nowrap text-ellipsis text-center text-sm font-semibold w-full break-words">
            {data.project_desc}
          </p>
          <ul className=" flex items-center justify-center mt-3">
            <li>
              <Avatar className=" w-6 h-6">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
            </li>
            <li>
              <Avatar className=" w-6 h-6">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
            </li>
            <li>
              <Avatar className=" w-6 h-6">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
            </li>
          </ul>
          <div className=" flex flex-col items-center w-full">
            <div className=" flex items-center justify-between w-full py-2">
              <h3 className="font-semibold text-base group-hover:text-white">
                Priority
              </h3>
              <span className=" font-semibold text-sm capitalize group-hover:text-white">
                {data.priority === "hight" ? "60%" : "30%"}
              </span>
            </div>
            <Progress
              value={data.priority === "hight" ? 60 : 30}
              className="w-[100%]  group-hover:bg-white"
            />
          </div>

          <div className=" flex justify-between w-full py-3">
            <ul className=" flex items-center gap-2">
              <li className="flex items-center gap-2">
                <RiDashboard3Fill className="group-hover:text-white" />
                <span className="  font-semibold group-hover:text-white">
                  3
                </span>
              </li>

              <li className="flex items-center gap-2">
                <TiMessage className="group-hover:text-white" />
                <span className="  font-semibold group-hover:text-white ">
                  3
                </span>
              </li>
            </ul>
            <div className="flex items-center gap-1 px-1 bg-gray-200 group-hover:bg-white rounded-2xl text-sm">
              <GoClock className="group-hover:text-black" />
              <span className=" text-xs font-semibold">1 Week left</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardItem;
