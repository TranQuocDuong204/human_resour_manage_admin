import React from "react";
import CardItem from "./components/CardItem";

interface IPropsDashboard {
  dataProjects: any[];
}
const ProjectList = ({ dataProjects }: IPropsDashboard) => {
  return (
    <div className="mt-2 ">
      <div className="flex items-stretch flex-row    flex-wrap ml-[-3rem] mb-[-.5rem] ">
        {" "}
        {dataProjects.map((item: any) => (
          <CardItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
