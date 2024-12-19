"use client";
import { MdGroups2 } from "react-icons/md";
import { BiSolidChevronUp } from "react-icons/bi";
import { RxBackpack } from "react-icons/rx";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { VscGitStashApply } from "react-icons/vsc";
import React from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import { Decentralization } from "@/utils/decentralization";
const dataBoxs = [
  {
    name: "Total Employees",
    icon: <MdGroups2 />,
    total: 560,
    supicon: <BiSolidChevronUp />,
    label: "+12%",
    date: "Update: July 16, 2024",
  },
  {
    name: "Total Departments",
    icon: <RxBackpack />,
    total: 10,
    supicon: <BiSolidChevronUp />,
    label: "+5%",
    date: "Update: July 16, 2024",
  },
  {
    name: "Total Projects",
    icon: <AiOutlineFundProjectionScreen />,
    total: 45,
    supicon: <BiSolidChevronUp />,
    label: "+3%",
    date: "Update: July 16, 2024",
  },
  {
    name: "Total Applican",
    icon: <VscGitStashApply />,
    total: 120,
    supicon: <BiSolidChevronUp />,
    label: "+8%",
    date: "Update: July 16, 2024",
  },
];

const eventData = [
  {
    date: "Wednesday, 06 July 2023",
    tasks: [
      {
        time: "10:00",
        title: "Frontend Development",
        description: "ReactJS - Component Design",
      },
      {
        time: "11:30",
        title: "Backend Development",
        description: "NodeJS - API Integration",
      },
      {
        time: "14:00",
        title: "Meeting with HR",
        description: "Discuss project milestones",
      },
    ],
  },
  {
    date: "Wednesday, 09 December 2024",
    tasks: [
      {
        time: "12:30",
        title: "Frontend Development",
        description: "Continue code",
      },
      {
        time: "14:00",
        title: "Backend Development",
        description: "Integrate API",
      },
      {
        time: "16:00",
        title: "UI/UX Design",
        description: "Review user interface",
      },
    ],
  },
];

import TotalDashboard from "@/components/dashboard/components/TotalsDashboard";
import ChartDashboard from "@/components/dashboard/components/ChartDashboard";
const AttendanceOverview = dynamic(
  () => import("@/components/dashboard/components/AttendanceOverview"),
  {
    loading: () => (
      <div>
        <Skeleton className="w-full h-[300px] mb-2" />
      </div>
    ),
    ssr: false,
  }
);
const ScheduleDashboard = dynamic(
  () => import("@/components/dashboard/components/SheduleDashboard"),
  {
    loading: () => (
      <div>
        <Skeleton className="w-full h-[300px] mb-2" />
      </div>
    ),
    ssr: false,
  }
);

const DailyTaskDashboard = dynamic(
  () => import("@/components/dashboard/components/DailyTaskDashboard"),
  {
    loading: () => (
      <div>
        <Skeleton className="w-full h-[300px]" />
      </div>
    ),
    ssr: false,
  }
);

const DashboardPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const auth =
    typeof window !== "undefined"
      ? localStorage.getItem("auth") ?? null
      : false;
  const parsedAuth = auth ? JSON.parse(auth) : null;
  const authorized = parsedAuth?.response?.role || {};
  return (
    <section className="">
      {authorized === "admin" || authorized === "hr" ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-row p-2 lg:p-2">
            <div className="col-span-1 lg:col-span-2 ">
              <TotalDashboard dataBoxs={dataBoxs} />

              <div className="w-full bg-white mt-3 dark:bg-black dark:border-2 dark:border-[#2D3748] rounded-md shadow-md">
                <ChartDashboard />
              </div>
            </div>
            <div className="lg:col-span-1 w-full  ">
              <ScheduleDashboard date={date} setDate={setDate} />

              <DailyTaskDashboard eventData={eventData} />
            </div>
          </div>
          <AttendanceOverview />
        </div>
      ) : (
        "staff"
      )}
    </section>
  );
};

export default DashboardPage;
