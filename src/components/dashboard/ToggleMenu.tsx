import React from "react";
import Link from "next/link";
import { MdGroups2 } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { GoProjectRoadmap } from "react-icons/go";
import { IoHome } from "react-icons/io5";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
const dataNav = [
  {
    id: 1,
    name: "Dashboard",
    icon: <IoHome />,
    link: "/dashboard",
  },
  {
    id: 2,
    name: "Employees",
    icon: <MdGroups2 />,
    link: "/dashboard/employees",
  },
  {
    id: 3,
    name: "Departments",
    icon: <FaUsersGear />,
    link: "/dashboard/departments",
  },
  {
    id: 4,
    name: "Projects",
    icon: <GoProjectRoadmap />,
    link: "/dashboard/projects",
  },
];
interface IIsOpenProps {
  onClickItem: () => void;
  isOpen: boolean;
}
const Menu = ({ onClickItem, isOpen }: IIsOpenProps) => {
  const [isActive, setIsActive] = useState(1);
  const pathName = usePathname();
  useEffect(() => {
    const index = dataNav.findIndex((item) => item.link === pathName);
    setIsActive(index + 1);
  }, [pathName]);
  return (
    <ul className="flex flex-col gap-4 mt-4 p-3 ">
      {dataNav.map((item) => (
        <li
          key={item.id}
          className={clsx(
            "flex p-2   justify-start items-center gap-2 rounded-lg transition-all duration-300",
            isActive === item.id
              ? "bg-[#FFFFFF]  text-[#2D3748] dark:bg-[#28354b] dark:text-white"
              : " text-[#A0AEC0]"
          )}
          onClick={() => setIsActive(item.id)}
        >
          <span
            className={clsx("text-xl p-2 rounded-xl", {
              "text-[white] bg-[#FFD700]": isActive === item.id,
              "text-[#FFD700] bg-white": isActive !== item.id,
            })}
          >
            {item.icon}
          </span>
          <Link
            href={item.link}
            className=" text-base transition-all duration-200 font-semibold"
            onClick={onClickItem}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
