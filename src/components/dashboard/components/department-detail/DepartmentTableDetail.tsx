"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { IoEyeOutline } from "react-icons/io5";
import { FiTrash2 } from "react-icons/fi";

interface ITableHeader {
  label: string;
  width: string;
}
const tableHeader: ITableHeader[] = [
  { label: "Avatar", width: "10%" },
  { label: "Employees Name", width: "20%" },
  { label: "Department", width: "15%" },
  { label: "Position", width: "14%" },
  { label: "Employee Type", width: "15%" },
  { label: "Office Location", width: "15%" },
  { label: "Status", width: "15%" },
];
const DepartmentTableDetail = () => {
  return (
    <div className="mt-3 relative ">
      <Table className="w-full">
        <TableHeader className="sticky top-0 bg-white dark:bg-gray-800 z-10">
          <TableRow>
            {tableHeader.map((header, index) => (
              <TableHead
                key={index}
                className="font-normal text-gray-500 dark:text-white"
                style={{ width: header.width }}
              >
                {header.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
      </Table>
      <div className=" h-[300px] overflow-y-auto  border rounded-md">
        <Table className=" w-full ">
          <TableBody>
            <TableRow>
              <TableCell colSpan={7} className="h-full">
                {" "}
              </TableCell>
            </TableRow>

            <TableRow className="min-h-[50px]">
              <TableCell className="font-medium w-[10%]">
                <div className="flex items-center">
                  <Avatar>
                    <AvatarImage
                      src={"https://github.com/shadcn.png"}
                      className="h-10 w-10 rounded-full"
                    />
                  </Avatar>
                </div>
              </TableCell>
              <TableCell className="w-[20%]">duong</TableCell>
              <TableCell className="w-[15%]">duong</TableCell>
              <TableCell className="w-[15%]">uiux</TableCell>
              <TableCell className="w-[15%]">full</TableCell>
              <TableCell className="w-[15%]">da nang</TableCell>
              <TableCell className="w-[15%]">
                <div className="flex items-center text-lg gap-3">
                  <IoEyeOutline className="cursor-pointer" />
                  <FiTrash2 className="cursor-pointer" />
                </div>
              </TableCell>
            </TableRow>

            {/* <TableRow>
            <TableCell colSpan={7} className="text-center">
              No data available
            </TableCell>
          </TableRow> */}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DepartmentTableDetail;
