"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DepartmentActionDetail from "./DepartmentActionDetail";
import DepartmentTableDetail from "./DepartmentTableDetail";
import handleApi from "@/config/handleApi";
import { PaginationDemo } from "../Pagination";
import useDebounced from "@/hooks/useDebounced";
const DepartmentDetailDashboard = ({ idDetail }: any) => {
  const [dataDetail, setDataDetail] = useState<any[]>([]);
  const [nameDepartment, setNameDepartment] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [paginationDetail, setPaginationDetail] = useState<any>({
    page: 1,
    limit: 10,
  });
  const [dataPagination, setDataPagination] = useState<any>({});
  const [valueSearch, setValueSearch] = useState<string>("");
  const debouncedSearchTerm = useDebounced(valueSearch, 1000);
  const [listIdEmployees, setListIdEmployees] = useState<string[]>([]);
  const getApiDetailDepartment = async () => {
    setIsLoading(true);
    try {
      const res = await handleApi(
        `/employees/department-by-id/${idDetail}`,
        undefined,
        "get",
        paginationDetail.page,
        paginationDetail.limit,
        debouncedSearchTerm
      );
      const data = await res.data;

      setDataPagination(data.pagination);
      setNameDepartment(data.name_department);
      setDataDetail(data.employees);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getApiDetailDepartment();
  }, [idDetail]);

  useEffect(() => {
    getApiDetailDepartment();
  }, [paginationDetail.page]);
  useEffect(() => {
    setPaginationDetail({ ...paginationDetail, page: 1 });
    getApiDetailDepartment();
  }, [paginationDetail.limit]);

  useEffect(() => {
    getApiDetailDepartment();
  }, [debouncedSearchTerm]);

  
  return (
    <Card className="w-full dark:border-2 dark:border-[#2D3748] border-none">
      <CardHeader className="px-6 py-4 ">
        <CardTitle className=" text-xl">
          {isLoading ? "Loading...." : nameDepartment}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <DepartmentActionDetail setValueSearch={setValueSearch} idDetailDepartment={idDetail} listIdEmployees={listIdEmployees}/>

        <DepartmentTableDetail dataDetail={dataDetail} isLoading={isLoading} setListIdEmployees={setListIdEmployees} listIdEmployees={listIdEmployees} />
      </CardContent>
      <PaginationDemo
        dataPagination={dataPagination}
        setPageCurrent={(page: any) => {
          setPaginationDetail({ ...paginationDetail, page });
        }}
        setLimitPage={(limit: any) => {
          setPaginationDetail({ ...paginationDetail, limit });
        }}
      />
    </Card>
  );
};

export default DepartmentDetailDashboard;
