"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Loader from "../../Loader";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import { IoMdEye } from "react-icons/io";
import handleApi from "@/config/handleApi";
import ModalViewDetail from "../departments/modal/ModalViewDetail";
interface ITableHeader {
  label: string;
  width: string;
}
const tableHeader: ITableHeader[] = [
  { label: "Acions", width: "8%" },
  { label: "Avatar", width: "8%" },
  { label: "Employees Name", width: "18%" },
  { label: "Role", width: "14%" },
  { label: "Position", width: "12%" },
  { label: "Employee Type", width: "14%" },
  { label: "Office Location", width: "13%" },
  { label: "View", width: "13%" },
];

interface IPropsDetail {
  dataDetail: any[];
  isLoading: boolean;
  setListIdEmployees: any;
  listIdEmployees: string[];
}
const DepartmentTableDetail = ({
  dataDetail,
  isLoading,
  setListIdEmployees,
  listIdEmployees,
}: IPropsDetail) => {
  const [isOpenView, setIsOpenView] = useState(false);
  const [dataDetailEmployee, setDataDetailEmployee] = useState<any>({});
  const [isLoadingDetail, setIsLoadingDetail] = useState(false);

  const viewDetailEmployee = async (id: string) => {
    setIsLoadingDetail(true);
    setIsOpenView(true);
    try {
      const res = await handleApi(`/employees/${id}`);
      const results = await res.data;
      setDataDetailEmployee(results.employee_details);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingDetail(false);
    }
  };

  const handleGetIdEmployee = (e: any, id: string) => {
    const isCheck = e.target.checked;

    const results = isCheck
      ? [...listIdEmployees, id]
      : listIdEmployees.filter((item: any) => item !== id);
    setListIdEmployees(results);
  };

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
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={7} className="h-full">
                  {" "}
                  {/* Adjusted to match the correct number of columns */}
                  <div className="flex justify-center items-center h-[320px]">
                    <Loader />
                  </div>
                </TableCell>
              </TableRow>
            ) : dataDetail?.length > 0 ? (
              dataDetail?.map((item: any, index: number) => (
                <TableRow key={index} className="min-h-[50px]">
                  <TableCell>
                    {item.role === "manager" ? (
                      <span className="text-white font-medium text-xs p-1 rounded-md  bg-green-400">
                        In progress
                      </span>
                    ) : (
                      <input
                        onChange={(e) => handleGetIdEmployee(e, item.id)}
                        type="checkbox"
                        value={item.id}
                        checked={listIdEmployees.includes(item.id)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    )}
                  </TableCell>
                  <TableCell className="font-medium w-[8%]">
                    <div className="flex items-center">
                      <Avatar>
                        <AvatarImage
                          src={
                            item.avatar
                              ? item.avatar
                              : "https://github.com/shadcn.png"
                          }
                          className="h-10 w-10 rounded-full"
                        />
                      </Avatar>
                    </div>
                  </TableCell>
                  <TableCell className="w-[18%]">
                    {item.employee_name}
                  </TableCell>
                  <TableCell
                    className={`w-[14%] ${
                      item.role === "manager" ? "text-yellow-500 font-bold" : ""
                    }`}
                  >
                    {item.role === "manager" ? (
                      <span>👑</span>
                    ) : (
                      <span>👨‍💻</span>
                    )}{" "}
                    {capitalizeFirstLetter(item.role)}
                  </TableCell>
                  <TableCell className="w-[12%]">{item.position}</TableCell>
                  <TableCell className="w-[14%]">
                    {item.employee_type}
                  </TableCell>
                  <TableCell className="w-[13%]">
                    {item.office_location}
                  </TableCell>
                  <TableCell className="w-[13%]">
                    <div className="flex items-center text-lg gap-3">
                      <IoMdEye
                        className="cursor-pointer text-black hover:text-blue-800 transition-colors w-6 h-6"
                        onClick={() => viewDetailEmployee(item.id)}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center">
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <ModalViewDetail
          isOpenView={isOpenView}
          setIsOpenView={setIsOpenView}
          dataDetailEmployee={dataDetailEmployee}
          isLoading={isLoadingDetail}
        />
      </div>
    </div>
  );
};

export default DepartmentTableDetail;
