import { Button } from "@/components/ui/button";
import React from "react";
import { Input } from "@/components/ui/input";
import { IoIosAddCircle } from "react-icons/io";
const DepartmentActionDetail = () => {
  return (
    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:items-center sm:space-y-0 gap-2">
      <Input
        placeholder="Search name employees"
        className="sm:w-64 md:w-80 dark:border-2 dark:border-[#5f656e] "
      />
      <div className=" flex items-center gap-3 flex-wrap">
        {/* <ModalAddEmployees isOpen={isOpen} setIsOpen={setIsOpen} info={info} /> */}

        <Button
          variant={"outline"}
          className="px-5 flex items-center bg-black text-white font-semibold space-x-2 dark:bg-white dark:text-black"
        >
          {" "}
          <IoIosAddCircle />
          Add New User{" "}
        </Button>
        {/* <Button
          variant={"outline"}
          className=" flex items-center font-semibold dark:border-2"
          onClick={() => setIsOpenFilter(!isOpenFilter)}
        >
          <BsFilter />
          Fillter
        </Button> */}
        <Button>Filter</Button>
      </div>
    </div>
  );
};

export default DepartmentActionDetail;
