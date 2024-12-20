"use client";
import { ReactNode, useState } from "react";
import Sidebar from "@/components/dashboard/SideBar";
import HeaderContent from "@/components/dashboard/HeaderContent";
const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex flex-row gap-0 lg:gap-1 h-screen">
      {/* Sidebar */} <Sidebar /> {/* Main Content */}
      <div className="w-full md:w-[85%] lg:w-[80%] xl:w-[82%]  overflow-y-auto ">
        <HeaderContent /> {children}{" "}
      </div>
    </section>
  );
};
export default DashboardLayout;
