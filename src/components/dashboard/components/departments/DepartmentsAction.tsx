"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BsBuildingFillAdd } from "react-icons/bs";
const DepartmentsAction = ({ onSearch }: any) => {
  const handleAddNewDeparment = () => {
    alert("add new department");
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
    </div>
  );
};

export default DepartmentsAction;
