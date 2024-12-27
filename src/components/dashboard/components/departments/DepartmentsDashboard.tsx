"use client";
import { useState } from "react";
import DepartmentsAction from "./DepartmentsAction";
import DepartmentsList from "./DepartmentsList";
import useDebounced from "@/hooks/useDebounced";
const DepartmentsDashboard = ({ nameTitle }: any) => {
  const [valueSearch, setValueSearch] = useState<string>("");
  const debouncedSearchTerm = useDebounced(valueSearch, 700);
  return (
    <div className="w-full dark:border-2 dark:border-[#2D3748] p-5 rounded-lg">
      <div className="pb-2">
        <h2 className=" text-xl font-semibold">{nameTitle}</h2>
      </div>
      <div>
        <DepartmentsAction onSearch={setValueSearch} />
        <DepartmentsList valueSearch={debouncedSearchTerm} />
      </div>
    </div>
  );
};
export default DepartmentsDashboard;
