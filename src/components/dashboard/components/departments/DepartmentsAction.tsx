"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BsBuildingFillAdd } from "react-icons/bs";
import ModalAddNewDepartment from "./modal/ModalAddNewDepartment";
const DepartmentsAction = ({ onSearch, setDataNewDepartment }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleAddNewDeparment = () => {
    setIsOpen(true);
  };
  return (
    <div className="flex gap-2 justify-between items-center">
      <Input
        placeholder="Search name department"
        className="sm:w-64 md:w-80 dark:border-2 dark:border-[#5f656e] "
        onChange={(e) => onSearch(e.target.value)}
      />

      <Button
        onClick={handleAddNewDeparment}
        className=" bg-black text-white border-2 border-[#FFD700] rounded-md hover:bg-white hover:text-black flex items-center"
      >
        <BsBuildingFillAdd />
        Add new Department
      </Button>
      <ModalAddNewDepartment
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setDataNewDepartment={(value: any) => {
          setDataNewDepartment(value);
        }}
      />
    </div>
  );
};

export default DepartmentsAction;
