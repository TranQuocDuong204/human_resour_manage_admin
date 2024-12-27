"use client";
import { ReactNode, useState } from "react";
import Sidebar from "@/components/dashboard/SideBar";
import HeaderContent from "@/components/dashboard/HeaderContent";
import Menu from "@/components/dashboard/ToggleMenu";
import Image from "next/image";
import clsx from "clsx";
const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="flex flex-row gap-0 lg:gap-1 h-screen">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div
        className={clsx(
          "fixed inset-0 bg-gray-600 bg-opacity-50 z-[998] transition-opacity",
          {
            "opacity-100 pointer-events-auto": isOpen,
            "opacity-0 pointer-events-none": !isOpen,
          }
        )}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={clsx(
          "fixed top-0 left-0 h-full bg-[#F8F9FA] dark:bg-[black] w-[75%] max-w-[300px] z-[9999] shadow-lg transition-transform  overflow-x-hidden",
          {
            "translate-x-0": isOpen,
            "-translate-x-full": !isOpen,
          }
        )}
      >
        <div className="p-4 flex items-center justify-between  sticky top-0 left-0 z-[9999]">
          <div className="text-2xl flex items-center justify-start gap-2 font-bold">
            <Image src="/logo2-01.png" alt="logo" width={170} height={40} />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 font-semibold"
          >
            ✕
          </button>
        </div>

        <Menu onClickItem={() => setIsOpen(false)} isOpen={isOpen} />
      </div>
      <div className="w-full md:w-[85%] lg:w-[80%] xl:w-[82%]  overflow-y-auto ">
        <HeaderContent isOpen={isOpen} setIsOpen={setIsOpen} /> {children}{" "}
      </div>
    </section>
  );
};
export default DashboardLayout;
