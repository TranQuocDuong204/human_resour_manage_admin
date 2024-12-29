import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import { MdNavigateNext } from "react-icons/md";

interface IEmployee {
  id: string;
  avatar: string;
  position: string;
}

interface IEmployeesListProps {
  employees: IEmployee[];
  datauser: any[];
}
const EmployeeList = ({ employees, datauser }: IEmployeesListProps) => {
  return (
    <div className="mt-2">
      {employees.map((item: any) => {
        const user = datauser.find((u: any) => u.id === item.user_id);

        return (
          <div
            key={item.id}
            className=" flex items-center justify-between mb-2"
          >
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  src={item.avatar || "https://github.com/shadcn.png"}
                  alt={user?.username || "Unknown User"}
                />
              </Avatar>
              <div className=" flex flex-col">
                <h2 className=" text-base font-semibold">
                  {user ? capitalizeFirstLetter(user.username) : "Unknown User"}
                </h2>
                <p className=" text-sm font-extralight">{item.position} </p>
              </div>
            </div>
            <span className=" cursor-pointer">
              <MdNavigateNext className=" text-lg" />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default EmployeeList;
