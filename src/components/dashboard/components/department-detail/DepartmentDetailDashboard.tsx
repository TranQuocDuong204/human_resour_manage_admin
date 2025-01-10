"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DepartmentActionDetail from "./DepartmentActionDetail";
import DepartmentTableDetail from "./DepartmentTableDetail";
import handleApi from "@/config/handleApi";
import { PaginationDemo } from "../Pagination";
import useDebounced from "@/hooks/useDebounced";
const DepartmentDetailDashboard = ({ idDetail }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [paginationDetail, setPaginationDetail] = useState<any>({
    page: 1,
    limit: 10,
  });
  const [dataPagination, setDataPagination] = useState<any>({});
  const [valueSearch, setValueSearch] = useState<string>("");
  const debouncedSearchTerm = useDebounced(valueSearch, 1000);
  const [listIdEmployees, setListIdEmployees] = useState<string[]>([]);
  const [isCheckManager, setIsCheckManager] = useState(true);
  const [dataDetailDepartment, setDataDetailDepartment] = useState<any>({});
  const getApiDetailDepartment = async (
    idDetail: string,
    page: number,
    limit: number,
    search: string
  ) => {
    setIsLoading(true);
    try {
      const res = await handleApi(
        `/employees/department-by-id/${idDetail}`,
        undefined,
        "get",
        page,
        limit,
        search
      );
      const data = await res.data;
      setIsCheckManager(data.isCheckManager ? true : false);
      setDataDetailDepartment(data);
      setDataPagination(data.pagination);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getApiDetailDepartment(
      idDetail,
      paginationDetail.page,
      paginationDetail.limit,
      debouncedSearchTerm
    );
  }, [
    idDetail,
    paginationDetail.page,
    paginationDetail.limit,
    debouncedSearchTerm,
  ]);

  return (
    <Card className="w-full dark:border-2 dark:border-[#2D3748] border-none">
      <CardHeader className="px-6 py-4 ">
        <CardTitle className=" text-xl">
          {isLoading ? (
            <div className="w-48 h-6 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-[length:200%_100%] animate-shimmer rounded-md"></div>
          ) : (
            dataDetailDepartment.name_department
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <DepartmentActionDetail
          setValueSearch={setValueSearch}
          idDetailDepartment={idDetail}
          listIdEmployees={listIdEmployees}
          setDataDetail={setDataDetailDepartment}
          setListIdEmployees={setListIdEmployees}
          dataDetailDepartment={dataDetailDepartment}
          isCheckManager={isCheckManager}
        />

        <DepartmentTableDetail
          dataDetail={dataDetailDepartment.employees}
          isLoading={isLoading}
          setListIdEmployees={setListIdEmployees}
          listIdEmployees={listIdEmployees}
        />
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
