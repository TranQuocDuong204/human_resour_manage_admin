import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiRectangleGroup } from "react-icons/hi2";
import handleApi from "@/config/handleApi";
const BtnEditDepartment = ({ idDetailDepartment, listIdEmployees }: any) => {
  const [dataDepartment, setDataDepartment] = useState<any[]>([]);
  const getDepartment = async () => {
    try {
      const res = await handleApi("/departments/");
      const result = await res.data;
      const data = result.departments.filter(
        (item: any) => item.id !== idDetailDepartment
      );
      setDataDepartment(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDepartment();
  }, []);

  return (
    <>
      {listIdEmployees?.length > 0 && (
        <DropdownMenu>
          <div className="">
            <DropdownMenuTrigger
              className="
            group
            flex items-center gap-3
            px-4 py-1.5
            bg-[#FFD700]
            text-gray-800
            rounded-lg
            shadow-sm hover:shadow-md
            transition-all duration-300 ease-in-out
            transform hover:-translate-y-0.1
            hover:bg-slate-500 
  "
            >
              <HiRectangleGroup className="text-2xl text-gray-600 group-hover:text-slate-50" />
              <span className="text-gray-700 cursor-pointer group-hover:text-slate-50">
                Choose a new department for{" "}
                <span className="font-bold underline decoration-2 decoration-gray-400 group-hover:text-slate-50">
                  {listIdEmployees?.length || 0}{" "}
                </span>
                employees
              </span>
            </DropdownMenuTrigger>
          </div>

          <DropdownMenuContent className="mt-3 w-64  cursor-pointer p-3">
            {dataDepartment.map((item: any, index: number) => (
              <DropdownMenuItem key={item.id} className="cursor-pointer">
                <div>
                  <p>{item.name_department}</p>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
};

export default BtnEditDepartment;
