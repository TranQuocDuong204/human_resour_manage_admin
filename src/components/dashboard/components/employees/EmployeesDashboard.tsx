"use client";
import { useCallback, useEffect, useState } from "react";
import EmployeesAction from "./EmployeesAction";
import EmployeesTable from "./EmployeesTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PaginationDemo } from "../Pagination";
import handleApi from "@/config/handleApi";
import { LabelFilter } from "./components/LabelFilter";
import useDebounced from "@/hooks/useDebounced";

interface ITemFilter {
  department_name: string;
  employee_type: string;
}
interface ITemFilter {
  gender: string;
}
const EmployeesDashboard = () => {
  const [dataEmployee, setDataEmployee] = useState<any[]>([]);
  const [paginationEmployees, setPaginationEmployees] = useState<any>({
    page: 1,
    limit: 10,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const [dataDepartment, setDataDepartment] = useState<any[]>([]);
  const [dataPagination, setDataPagination] = useState<any>({});
  const [labelFilter, setLabelFilter] = useState<any[]>([]);
  const debouncedSearchTerm = useDebounced(valueSearch, 1000);
  const [itemFilter, setItemFilter] = useState<ITemFilter>({
    department_name: "",
    employee_type: "",
    gender: "",
  });
  const getDataEmployee = useCallback(
    async (page: number, limit: number, search: string, item: any) => {
      setIsLoading(true);
      try {
        const res = await handleApi(
          "/employees/",
          undefined,
          "get",
          page,
          limit,
          search,
          {
            ...item,
          }
        );
        const result = res.data;
        const dataFull = result.data.filter(
          (item: any) => item.users && item.departments
        );
        setDataPagination(result.pagination);
        setDataEmployee(dataFull);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const getDataDepartment = async () => {
    setIsLoading(true);
    try {
      const res = await handleApi("/departments/");
      const result = res.data;
      setDataDepartment(result.departments);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getDataEmployee(
      paginationEmployees.page,
      paginationEmployees.limit,
      debouncedSearchTerm,
      itemFilter
    );
  }, [
    paginationEmployees.limit,
    debouncedSearchTerm,
    itemFilter,
    paginationEmployees.page,
  ]);
  useEffect(() => {
    getDataDepartment();
  }, []);

  const handleSetItemFilter = (key: string, value: string) => {
    setItemFilter((prev: any) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const resetItemFilter = (key: string) => {
    setItemFilter((prev: any) => {
      return {
        ...prev,
        [key]: "",
      };
    });
  };

  return (
    <Card className="w-full dark:border-2 dark:border-[#2D3748] border-none">
      <CardHeader className="px-6 py-4 ">
        <CardTitle className=" text-2xl">Employee Management</CardTitle>
      </CardHeader>
      <CardContent>
        <EmployeesAction
          onSearch={setValueSearch}
          dataDepartment={dataDepartment}
          dataEmployee={dataEmployee}
          setLabelFilter={setLabelFilter}
          labelFilter={labelFilter}
        />
        <div className="flex items-center gap-3">
          {labelFilter.length > 0 &&
            labelFilter.map((item: any) => {
              let dataForFilter = [];

              if (item.name === "Department") {
                dataForFilter = dataDepartment.map(
                  (item: any) => item.name_department
                );
              } else if (item.name === "Type Employees") {
                dataForFilter = ["full-time", "part-time", "Remote"];
              } else if (item.name === "Gender") {
                dataForFilter = ["male", "female", "other"];
              }

              return (
                <LabelFilter
                  key={item.id}
                  itemFilter={item}
                  datafilter={dataForFilter}
                  setLabelFilter={setLabelFilter}
                  handleSetItemFilter={(key: string, value: string) =>
                    handleSetItemFilter(key, value)
                  }
                  resetItemFilter={(key: string) => resetItemFilter(key)}
                  itemFilterName={itemFilter}
                />
              );
            })}
        </div>

        <EmployeesTable
          isLoading={isLoading}
          dataEmployee={dataEmployee}
          setDataEmployee={setDataEmployee}
        />

        <PaginationDemo
          dataPagination={dataPagination}
          setPageCurrent={(page: number) => {
            setPaginationEmployees({
              ...paginationEmployees,
              page,
            });
          }}
          setLimitPage={(limit: number) =>
            setPaginationEmployees({ ...paginationEmployees, limit })
          }
        />
      </CardContent>
    </Card>
  );
};

export default EmployeesDashboard;
