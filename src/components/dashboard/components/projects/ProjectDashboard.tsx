"use client";
import handleApi from "@/config/handleApi";
import React, { useEffect, useState } from "react";
import ProjectAction from "./ProjectAction";
import ProjectList from "./ProjectList";
import SkeletonLoader from "../departments/components/SkeletonLoader";
import TabStatus from "./components/TabStatus";

const ProjectDashboard = () => {
  const [projectsData, setProjectsData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const res = await handleApi("/projects");
      const result = await res.data;
      setProjectsData(result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="w-full dark:border-2 dark:border-[#2D3748] p-5 rounded-lg">
      <div className="pb-2 flex items-center justify-between">
        <h2 className=" text-2xl font-semibold">{"Projects Manager"}</h2>
        <ProjectAction />
      </div>
      <TabStatus />
      {isLoading ? <div className="grid grid-cols-1  md:grid-cols-2  gap-5 mt-3">
          {[1, 2, 3, 4].map((item: any, index: number) => {
            return <SkeletonLoader key={index} />;
          })}
        </div>:  <ProjectList dataProjects={projectsData} />}
     
    </div>
  );
};

export default ProjectDashboard;
