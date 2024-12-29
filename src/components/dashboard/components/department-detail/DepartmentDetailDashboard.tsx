import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DepartmentActionDetail from "./DepartmentActionDetail";
import DepartmentTableDetail from "./DepartmentTableDetail";
const DepartmentDetailDashboard = ({ idDetail }: any) => {
  return (
    <Card className="w-full dark:border-2 dark:border-[#2D3748] border-none">
      <CardHeader className="px-6 py-4 ">
        <CardTitle className=" text-xl">Department Detail Manager</CardTitle>
      </CardHeader>
      <CardContent>

        <DepartmentActionDetail/>

        <DepartmentTableDetail/>
      </CardContent>
    </Card>
  );
};

export default DepartmentDetailDashboard;
