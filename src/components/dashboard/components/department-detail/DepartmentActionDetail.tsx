import { Button } from "@/components/ui/button";
import React from "react";
import { Input } from "@/components/ui/input";
import BtnEditDepartment from "./components/BtnEditDepartment";
import { FiUserCheck } from "react-icons/fi";
import { useState } from "react";
import AssignDepartmentManagerModal from "./modals/AssignDepartmentManagerModal";
const DepartmentActionDetail = ({
  setValueSearch,
  idDetailDepartment,
  listIdEmployees,
  setDataDetail,
  setListIdEmployees,
  dataDetailDepartment,
  isCheckManager,
}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:items-center sm:space-y-0 gap-2">
      <Input
        placeholder="Search name employees"
        className="sm:w-64 md:w-80 dark:border-2 dark:border-[#5f656e] "
        onChange={(e) => setValueSearch(e.target.value)}
      />
      <div className=" flex items-center gap-3 flex-wrap">
        {/* <ModalAddEmployees isOpen={isOpen} setIsOpen={setIsOpen} info={info} /> */}
        <BtnEditDepartment
          idDetailDepartment={idDetailDepartment}
          listIdEmployees={listIdEmployees}
          setDataDetail={setDataDetail}
          setListIdEmployees={setListIdEmployees}
        />
        {!isCheckManager && (
          <Button
            onClick={() => setIsOpen(true)}
            variant={"outline"}
            className={`px-6 py-2.5 flex items-center bg-black text-white font-semibold space-x-1 border-2 border-[#FFD700] rounded-md  dark:bg-white dark:text-black dark:hover:bg-gray-200 transition duration-200 ease-in-out`}
          >
            <FiUserCheck className="text-xl" />
            <span className="text-sm">Assign Manager</span>
          </Button>
        )}

        <AssignDepartmentManagerModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          dataDetailDepartment={dataDetailDepartment}
          setDataDetail={setDataDetail}
        />
      </div>
    </div>
  );
};

export default DepartmentActionDetail;
