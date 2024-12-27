"use client"
import { Input } from "@/components/ui/input";

const DepartmentsAction = ({onSearch}: any) => {

  return (
    <div className="flex gap-2">
      <Input
        placeholder="Search name department"
        className="sm:w-64 md:w-80 dark:border-2 dark:border-[#5f656e] "
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default DepartmentsAction;
