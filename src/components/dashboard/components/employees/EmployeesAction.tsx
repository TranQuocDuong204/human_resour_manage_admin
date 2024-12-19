"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoIosAddCircle } from "react-icons/io";
import { BsFilter } from "react-icons/bs";
import { useState } from "react";
import dynamic from "next/dynamic";
import ModalFilter from "./modals/ModalFilter";

const ModalAddEmployees = dynamic(() => import("./modals/ModalAddEmployees"), {
  ssr: false,
});
interface EmployeesActionProps {
  onSearch: (query: string) => void;
  onFilter: () => void;
}

const EmployeesAction = ({ onSearch, onFilter }: EmployeesActionProps) => {
  const auth =
    typeof window !== "undefined"
      ? localStorage.getItem("auth") ?? null
      : false;
  const parsedAuth = auth ? JSON.parse(auth) : null;
  const info = parsedAuth.response;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  return (
    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
      <Input
        placeholder="Search employees"
        className="sm:w-64 md:w-80 dark:border-2 dark:border-[#5f656e] "
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className=" flex items-center gap-3">
        <ModalAddEmployees isOpen={isOpen} setIsOpen={setIsOpen} info={info} />
        <ModalFilter
          isOpen={isOpenFilter}
          setIsOpen={setIsOpenFilter}
          isDeletedId={null}
        />
        <Button
          variant={"outline"}
          className="px-5 flex items-center bg-black text-white font-semibold space-x-2 dark:bg-white dark:text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {" "}
          <IoIosAddCircle />
          Add New User{" "}
        </Button>
        <Button
          variant={"outline"}
          className=" flex items-center font-semibold dark:border-2"
          onClick={() => setIsOpenFilter(!isOpenFilter)}
        >
          <BsFilter />
          Fillter
        </Button>
      </div>
    </div>
  );
};

export default EmployeesAction;
