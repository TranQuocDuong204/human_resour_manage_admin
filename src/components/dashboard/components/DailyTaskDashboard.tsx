"react-icons/vsc";
import React from "react";

import DailyTaskItem from "./DailyTaskItem";

const DailyTaskDashboard = ({ eventData }: any) => {
  return (
    <div className="mt-3 ">
      {eventData.map((item: any, index: number) => (
        <DailyTaskItem item={item} index={index} key={index} />
      ))}
    </div>
  );
};

export default DailyTaskDashboard;
