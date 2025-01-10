import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiRectangleGroup } from "react-icons/hi2";
import handleApi from "@/config/handleApi";
import ConfirmTranferModal from "../modals/ConfirmTranferModal";
import { toast } from "@/hooks/use-toast";
const BtnEditDepartment = ({
  idDetailDepartment,
  listIdEmployees,
  setDataDetail,
  setListIdEmployees,
}: any) => {
  const [dataDepartment, setDataDepartment] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [nameDepartment, setNameDepartment] = useState<string>("");
  const [isLoadingUpdate, setIsLoadingUpdate] = useState<boolean>(false);
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

  const handleCheckTranfer = (id: string) => {
    setNameDepartment(id);
    setIsOpen(true);
  };
  const handleUpdateEmployee = async (id: string) => {
    setIsLoadingUpdate(true);
    if (!listIdEmployees || listIdEmployees.length === 0) {
      console.error("Employee list is empty.");
      return;
    }

    if (!id) {
      console.error("Department ID is not provided.");
      return;
    }
    try {
      const res = await handleApi(
        "/departments",
        {
          employee_ids: listIdEmployees,
          department_id: id,
        },
        "put"
      );
      const result = await res.data;
      if (result?.error) {
        console.error("Error updating employees:", result.error);
      } else {
        console.log("Successfully updated employees:", res);
        setIsLoadingUpdate(false);
        setIsOpen(false);
        setDataDetail((prev: any) => {
          return {
            ...prev,
            employees: prev.employees.filter(
              (item: any) => !listIdEmployees.includes(item.id)
            ),
          };
        });
        setListIdEmployees([]);
        toast({
          variant: "default",
          title: `Success`,
          description: "Update department successfully",
        });
      }
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
              <DropdownMenuItem
                key={item.id}
                className="cursor-pointer"
                onClick={() => handleCheckTranfer(item.id)}
              >
                <div>
                  <p>{item.name_department}</p>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      <ConfirmTranferModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleUpdateEmployee={(value: string) => {
          handleUpdateEmployee(value);
        }}
        isLoadingUpdate={isLoadingUpdate}
        nameDepartment={nameDepartment}
      />
    </>
  );
};

export default BtnEditDepartment;
