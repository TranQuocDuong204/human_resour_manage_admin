import React from "react";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { FaUserTag } from "react-icons/fa";
import { IoMaleFemaleSharp } from "react-icons/io5";
import { useState } from "react";
import { BsFilter } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
const FilterEmployees = ({ setLabelFilter, labelFilter }: any) => {
  const [selectedFilters, setSelectedFilters] = useState<any[]>([
    {
      id: 1,
      name: "Department",
      key: "department_name",
      byTable: "departments",
      icon: <HiOutlineUserGroup />,
    },
    {
      id: 2,
      name: "Type Employees",
      key: "employee_type",
      byTable: "employees",
      icon: <FaUserTag />,
    },
    {
      id: 3,
      name: "Gender",
      key: "gender",
      byTable: "employees",
      icon: <IoMaleFemaleSharp />,
    },
  ]);

  const [dataFilter, setDataFilter] = useState<any[]>([]);

  const handleSearchFilter = (e: any) => {
    const dataNewFilter = selectedFilters.filter((i) =>
      i.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setDataFilter(dataNewFilter);
  };

  const handleAddLabelFilter = (filter: any) => {
    setLabelFilter((prev: any) => {
      if (prev.includes(filter)) {
        return prev.filter((item: any) => item !== filter);
      }
      return [...prev, filter];
    });
  };
  return (
    <div>
      <DropdownMenu>
        <div className=" ">
          <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-[5px] border-solid border-2 border-gray-200 rounded-md shadow-sm hover:shadow-md transition duration-150">
            <BsFilter className="text-xl" />
            <div className=" cursor-pointer">Filter</div>
          </DropdownMenuTrigger>
        </div>

        <DropdownMenuContent className="mt-3 mr-10 w-64  cursor-pointer p-3">
          <Input
            type="text"
            placeholder="Filter by..."
            className=" mb-1"
            onChange={handleSearchFilter}
          />
          {dataFilter &&
            (dataFilter.length > 0 ? dataFilter : selectedFilters).map((i) => (
              <DropdownMenuItem
                key={i.id}
                className={`${
                  labelFilter.includes(i) ? "bg-gray-200" : "bg-white"
                } cursor-pointer my-1`}
                tabIndex={-1}
                onClick={() => handleAddLabelFilter(i)}
              >
                {i.icon}
                {i.name}
              </DropdownMenuItem>
            ))}
          {/* // : selectedFilters.map((filter) => (
            //     <DropdownMenuItem key={filter.id} className=" cursor-pointer">
            //       {filter.icon}
            //       {filter.name}
            //     </DropdownMenuItem>
            //   ))} */}
          {/* {selectedFilters.map((filter) => (
            <DropdownMenuItem key={filter.id} className=" cursor-pointer">
              {filter.icon}
              {filter.name}
            </DropdownMenuItem>
          ))} */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default FilterEmployees;
