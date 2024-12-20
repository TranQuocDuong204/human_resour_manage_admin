"use client";

import { useEffect, useState, useMemo } from "react";
import EmployeesAction from "./EmployeesAction";
import EmployeesTable from "./EmployeesTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import handleApi from "@/config/handleApi";
const EmployeesDashboard = () => {
  const [dataEmployee, setDataEmployee] = useState<any[]>([]);
  const [dataUser, setDataUser] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const [dataDepartment, setDataDepartment] = useState<any[]>([]);
  const getDataEmployee = async () => {
    setIsLoading(true);
    try {
      const res = await handleApi("/employees/");
      const result = res.data;
      const newData = result.filter((item: any) => item.is_active === true);
      setDataEmployee(newData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getDataUser = async () => {
    try {
      const res = await handleApi("/users/");
      const result = res.data;
      setDataUser(result);
    } catch (error) {
      console.log(error);
    }
  };
  const getDataDepartment = async () => {
    try {
      const res = await handleApi("/departments/");
      const result = res.data;
      setDataDepartment(result);
    } catch (error) {
      console.log(error);
    }
  };
  const getNameUser = (idUser: string): any => {
    if (!dataUser.length) return "Loading..";
    const user = dataUser.find((user: any) => user.id === idUser);
    return user ? user.username : "Unknown";
  };

  useEffect(() => {
    getDataEmployee();
    getDataUser();
    getDataDepartment();
  }, []);

  const handleSearch = useMemo(() => {
    if (valueSearch.trim() === "") {
      return dataEmployee;
    }
    const filterSearch = dataUser.filter((item: any) =>
      item.username.toLowerCase().includes(valueSearch.toLowerCase())
    );
    const userId = filterSearch.map((item: any) => item.id);

    const filterSearch2 = dataEmployee.filter((item: any) =>
      item.user_id.includes(userId)
    );
    return filterSearch2;
  }, [valueSearch]);

  const handleFilter = () => {
    console.log("filter");
  };
  return (
    <Card className="w-full dark:border-2 dark:border-[#2D3748]">
      <CardHeader className="px-6 py-4 ">
        <CardTitle className=" text-xl">Employee Management</CardTitle>
      </CardHeader>
      <CardContent>
        <EmployeesAction onSearch={setValueSearch} onFilter={handleFilter} />
        <EmployeesTable
          handleSearch={handleSearch}
          isLoading={isLoading}
          dataEmployee={dataEmployee}
          dataDepartment={dataDepartment}
          setDataEmployee={setDataEmployee}
          getNameUser={(id: any) => {
            return getNameUser(id);
          }}
          dataUser={dataUser}
        />
      </CardContent>
    </Card>
  );
};

export default EmployeesDashboard;
