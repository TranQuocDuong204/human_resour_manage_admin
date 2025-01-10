import React from "react";
import { TbFileExport } from "react-icons/tb";
import { handleExportExcel } from "@/utils/handleExportExcel";
const BtnExportExcel = ({ dataEmployee }: any) => {
  const handleExport = () => {
    const data = dataEmployee;
    const name = "employees.xlsx";

    handleExportExcel(data, name);
  };
  return (
    <div
      onClick={handleExport}
      className=" flex items-center gap-2 cursor-pointer p-[6px] justify-center text-white  rounded-md bg-emerald-500 hover:shadow-md transition duration-150 "
    >
      <TbFileExport />
      Excel
    </div>
  );
};

export default BtnExportExcel;
