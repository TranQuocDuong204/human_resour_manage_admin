"use client";
import React, { useEffect } from "react";
import BoardDetail from "./BoardDetail";
import ActionDetail from "./ActionDetail";
import handleApi from "@/config/handleApi";
import { mockDataDemo } from "@/apis/mockDataDnd";
interface IPropsPageDedailProject {
  projectId: string;
}
const DashboardDetail = ({ projectId }: IPropsPageDedailProject) => {
  const [dataDetailProject, setDataDetailProject] = React.useState({});
  const [dataColumns, setDataColumns] = React.useState([]);
  
  // const fetchDetailProject = async () => {
  //   try {
  //     const res = await handleApi(`/projects/${projectId}`);
  //     const result = await res.data;
  //     setDataDetailProject((prev: any) => ({ ...prev, ...result }));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const fetchDataColumns = async () => {
  //   try {
  //     const res = await handleApi(`/columns/project/${projectId}`);
  //     const result = await res.data;
  //     const sortResultByOrder = result.sort(
  //       (a: any, b: any) => a.order - b.order
  //     );

  //     setDataColumns(sortResultByOrder);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchDetailProject();
  //   fetchDataColumns();
  // }, [projectId]);

  return (
    <div className="flex flex-col  w-full">
      <ActionDetail projects={mockDataDemo?.projects} />
      <BoardDetail dataColumns={mockDataDemo?.projects} />
    </div>
  );
};

export default DashboardDetail;
