"use client";
import React, { useEffect, useState } from "react";
import DepartmentItem from "./components/DepartmentItem";
import handleApi from "@/config/handleApi";
import clsx from "clsx";
import SkeletonLoader from "./components/SkeletonLoader";
const DepartmentsList = ({ valueSearch, dataNewDepartment }: any) => {
  const [dataDepartment, setDataDepartment] = useState<any[]>([]);
  const [dataUser, setDataUser] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const getDataDepartment = async () => {
    setIsLoading(true);
    try {
      const res = await handleApi(
        "/departments/",
        undefined,
        "get",
        undefined,
        undefined,
        valueSearch
      );
      const result = res.data;
      setDataDepartment(result.departments);
      setIsLoading(false);
      if (result.message) {
        setDataDepartment([]);
        setIsLoading(false);
        return;
      }
    } catch (error) {
      console.log(error);
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

  useEffect(() => {
    getDataUser();
    getDataDepartment();
  }, []);

  useEffect(() => {
    if (valueSearch) {
      getDataDepartment();
    }
  }, [valueSearch]);

  useEffect(() => {
    setDataDepartment((prev) => {
      return [...prev, dataNewDepartment];
    });
  }, [dataNewDepartment]);
  return (
    <div>
      {isLoading ? (
        <div className="grid grid-cols-1  md:grid-cols-2  gap-5 mt-3">
          {[1, 2, 3, 4].map((item: any, index: number) => {
            return <SkeletonLoader key={index} />;
          })}
        </div>
      ) : (
        <div
          className={clsx("", {
            "grid grid-cols-1  md:grid-cols-2  gap-5 mt-3":
              dataDepartment.length > 0,
            "w-full py-3 flex items-center justify-center text-center":
              dataDepartment.length === 0,
          })}
        >
          {dataDepartment.length > 0 ? (
            dataDepartment.map((item: any, index: number) => (
              <DepartmentItem
                key={index}
                dataDepartment={item}
                isLoading={isLoading}
                dataUser={dataUser}
                isNotFound={false}
              />
            ))
          ) : (
            <div className=" shadow-md rounded-lg p-3 flex flex-col gap-2 w-full bg-red-200 text-red-700">
              Not Found Department!!
              <span className=" text-center text-sm text-red-700">
                We couldn’t find any departments. Please try again later or
                check your search criteria.
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DepartmentsList;
