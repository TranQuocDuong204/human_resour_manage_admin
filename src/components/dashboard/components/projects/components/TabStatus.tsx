import React from "react";
import { SlMenu } from "react-icons/sl";
import { RxDashboard } from "react-icons/rx";
const dataTabs = [
  {
    id: 1,
    name: "All",
    total: 45,
    active: true,
  },
  {
    id: 2,
    name: "Started",
    total: 12,
  },
  {
    id: 3,
    name: "Completed",
    total: 12,
  },
  {
    id: 4,
    name: "Cancelled",
    total: 12,
  },
];
const TabStatus = () => {
  const [active, setAcvite] = React.useState(1);
  return (
    <div className="flex items-center justify-between pb-5 pt-2 border-b-2 border-gray-100 relative">
      <ul className="flex items-center gap-4">
        {dataTabs.map((item: any, index: number) => (
          <li
            key={item.id}
            className="relative flex items-center gap-3 mr-3"
            onClick={() => setAcvite(item.id)}
          >
            <a href="#" className="text-gray-700 font-semibold">
              {item.name}
            </a>
            <span className="text-xs text-gray-500 px-2 bg-white  shadow-md border rounded-md">
              {item.total}
            </span>
            <div
              className={`absolute bottom-[-20px] h-1 w-full bg-[#FFD700] transition-all duration-300 ${
                item.id === active ? "opacity-100" : "opacity-0"
              }`}
            ></div>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <SlMenu className="text-lg font-semibold" />
        <RxDashboard className="text-lg" />
      </div>
    </div>
  );
};

export default TabStatus;
