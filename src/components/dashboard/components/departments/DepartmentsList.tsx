"use client";
import React, { useEffect, useState } from "react";

import DepartmentItem from "./components/DepartmentItem";
import handleApi from "@/config/handleApi";
import Loader from "../../Loader";
const DepartmentsList = ({ valueSearch }: any) => {
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
      if (result.message) {
        setDataDepartment([]);
        setIsLoading(false);
        return;
      } else {
        setDataDepartment(result.departments);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getDataUser = async () => {
    setIsLoading(true);
    try {
      const res = await handleApi("/users/");
      const result = res.data;
      setDataUser(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDataUser();
    getDataDepartment();
  }, []);

  useEffect(() => {
    getDataDepartment();
  }, [valueSearch]);

  return (
    <div>
      {isLoading ? (
        <div className=" flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1  md:grid-cols-2  gap-5 mt-3">
          {dataDepartment.length > 0 ? (
            dataDepartment.map((item: any, index: number) => (
              <DepartmentItem
                key={index}
                dataDepartment={item}
                isLoading={isLoading}
                dataUser={dataUser}
              />
            ))
          ) : (
            <DepartmentItem isNotFound={true} />
          )}
        </div>
      )}
    </div>
  );
};

export default DepartmentsList;
