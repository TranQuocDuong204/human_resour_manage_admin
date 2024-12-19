"use client";

import { useEffect, useState } from "react";
import { MdGroups2 } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { GoProjectRoadmap } from "react-icons/go";
import { IoHome } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
const Sidebar = () => {
  const [isActive, setIsActive] = useState<null | number>(1);
  const pathName = usePathname();
  const auth =
    typeof window !== "undefined"
      ? localStorage.getItem("auth") ?? null
      : false;
  const parsedAuth = auth ? JSON.parse(auth) : null;
  const info = parsedAuth?.response?.role;

  useEffect(() => {
    const index = dataNav.findIndex((item) => item.link === pathName);
    setIsActive(index + 1);
  }, [pathName]);
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

  const dataNavStaff = [
    {
      id: 1,
      name: "Dasboard",
      icon: <MdGroups2 />,
      link: "/dashboard",
    },
    {
      id: 2,
      name: "Profile",
      icon: <MdGroups2 />,
      link: "/dashboard/profile",
    },
    {
      id: 3,
      name: "Leave",
      icon: <FaUsersGear />,
      link: "/dashboard/profile/leave",
    },
    {
      id: 4,
      name: "Setting",
      icon: <GoProjectRoadmap />,
      link: "/dashboard/profile/setting",
    },
  ];
  return (
    <>
      <div className="w-0 md:w-[15%] lg:w-[20%] xl:w-[18%] overflow-y-auto bg-[#F8F9FA] dark:bg-[black] shadow-lg rounded-lg px-0 xl:px-4">
        <div className="flex flex-col justify-between h-full p-3">
          <div>
            {/* Logo */}
            <div className="text-2xl flex items-center justify-start gap-2 font-bold mb-6">
              <Image src="/logo2-01.png" alt="logo" width={170} height={40} />
              {/* <h2 className=" text-3xl uppercase">Picon</h2> */}
            </div>

            {/* Navigation Menu */}
            {info === "admin" || info === "hr" ? (
              <ul className="flex flex-col gap-4">
                {dataNav.map((item) => (
                  <li
                    key={item.id}
                    className={`flex p-2  justify-center lg:justify-start  items-center gap-2 rounded-lg transition-all duration-300 ${
                      isActive === item.id
                        ? "bg-[#FFFFFF]  text-[#2D3748] dark:bg-[#28354b] dark:text-white"
                        : " text-[#A0AEC0]"
                    }`}
                    onClick={() => setIsActive(item.id)}
                  >
                    <span
                      className={`text-xl p-2 rounded-xl  ${
                        isActive === item.id
                          ? "text-[white] bg-[#FFD700]"
                          : "text-[#FFD700] bg-white "
                      }`}
                    >
                      {item.icon}
                    </span>
                    <Link
                      href={item.link}
                      className="hidden lg:block text-base transition-all duration-200 font-semibold"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="flex flex-col gap-4">
                {dataNavStaff.map((item) => (
                  <li
                    key={item.id}
                    className={`flex p-2  justify-center lg:justify-start  items-center gap-2 rounded-lg transition-all duration-300 ${
                      isActive === item.id
                        ? "bg-[#FFFFFF]  text-[#2D3748] dark:bg-[#28354b] dark:text-white"
                        : " text-[#A0AEC0]"
                    }`}
                    onClick={() => setIsActive(item.id)}
                  >
                    <span
                      className={`text-xl p-2 rounded-xl  ${
                        isActive === item.id
                          ? "text-[white] bg-[#FFD700]"
                          : "text-[#FFD700] bg-white "
                      }`}
                    >
                      {item.icon}
                    </span>
                    <Link
                      href={item.link}
                      className="hidden lg:block text-base transition-all duration-200 font-semibold"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <ThemeToggle />
          {/* Theme Toggle */}
          {/* <div className="flex items-center justify-between flex-wrap lg:flex-nowrap mt-auto gap-2">
              <button className="w-full lg:w-1/2 p-3 bg-[#7152F3] text-white font-semibold rounded-md flex items-center justify-center gap-2">
                <CiLight className="text-2xl" />
                Light
              </button>
              <button className="w-full lg:w-1/2 p-3 bg-zinc-200 text-gray-700 font-semibold rounded-md flex items-center justify-center gap-2">
                <MdOutlineDarkMode className="text-2xl" />
                Dark
              </button>
            </div> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
