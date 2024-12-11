"use client";
import { ReactNode, useEffect, useState } from "react";
import { FaUserPen } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { AiOutlineProject } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
const menuProfile = [
  {
    id: 1,
    name: "Profile",
    icon: <FaUserPen />,
    link: "/dashboard/profile",
  },
  {
    id: 2,
    name: "Leave",
    icon: <IoCalendarOutline />,
    link: "/dashboard/profile/leave",
  },
  {
    id: 3,
    name: "Project",
    icon: <AiOutlineProject />,
    link: "/dashboard/profile/project",
  },
  {
    id: 4,
    name: "Setting",
    icon: <IoSettingsSharp />,
    link: "/dashboard/profile/setting",
  },
];
const ProfileLayout = ({ children }: { children: ReactNode }) => {
  const pathName = usePathname();
  const [isActive, setIsActive] = useState<null | number>(1);
  useEffect(() => {
    const item = menuProfile.findIndex((i) => i.link === pathName);
    setIsActive(item + 1);
  }, [pathName]);
  return (
    <>
      <div className="m-2 bg-white ">
        <ul className="w-full flex gap-1 rounded-md ">
          {menuProfile.map((item) => {
            return (
              <Link key={item.id} href={item.link} className="text-start">
                <li
                  className={`flex items-center justify-start gap-1 border-b-4 leading-6 px-6 py-2 font-semibold text-gray-700 rounded-md transition-all duration-300 
          ${
            isActive === item.id
              ? "border-b-4 border-[#FFD700] text-black bg-[#FFD700] bg-opacity-10"
              : "hover:bg-[#E2E8F0] hover:text-black"
          }`}
                >
                  <span className="px-0 sm:px-4 md:px-0">{item.icon}</span>

                  <span className=" hidden  md:block ">{item.name}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <section className="flex flex-row">{children}</section>
    </>
  );
};
export default ProfileLayout;
