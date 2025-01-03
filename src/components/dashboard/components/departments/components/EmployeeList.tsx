import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import { MdNavigateNext } from "react-icons/md";
import handleApi from "@/config/handleApi";
import ModalViewDetail from "../modal/ModalViewDetail";

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
  const [employeeDetail, setEmployeeDetail] = React.useState<any>({});
  const [isOpenView, setIsOpenView] = React.useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const displayDetailEmployee = async (id: string) => {
    setIsOpenView(true);
    setIsLoading(true)
    try {
      const res = await handleApi(`/employees/${id}`);
      const results = await res.data;
      const data = results.employee_details;
      setEmployeeDetail((prev: any) => ({ ...prev, ...data }));
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div className="mt-2">
      {employees?.length === 0 && <p>No employees found</p>}
      {employees?.slice(0,3)?.map((item: any) => {
        const user = datauser.find((u: any) => u.id === item.user_id);

        return (
          <div
            key={item?.id}
            className=" flex items-center justify-between mb-2"
          >
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  src={item?.avatar || "https://github.com/shadcn.png"}
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
              <MdNavigateNext
                className=" text-lg"
                onClick={() => displayDetailEmployee(item.id)}

              />
            </span>
          </div>
        );
      })}
      <ModalViewDetail
        isOpenView={isOpenView}
        setIsOpenView={setIsOpenView}
        dataDetailEmployee={employeeDetail}
        isLoading={isLoading}
      />
    </div>
  );
};

export default EmployeeList;
