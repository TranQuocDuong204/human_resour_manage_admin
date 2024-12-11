"use client";
import { useState } from "react";
import { MdGroups2 } from "react-icons/md";
import { BiSolidChevronUp } from "react-icons/bi";
import { RxBackpack } from "react-icons/rx";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { VscGitStashApply } from "react-icons/vsc";
import { Calendar } from "@/components/ui/calendar";
import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { CiCalendar } from "react-icons/ci";
import { SlOptionsVertical } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#FFD700",
  },
  mobile: {
    label: "Mobile",
    color: "#4FD1C5",
  },
} satisfies ChartConfig;

const DashboardPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <section className="">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-row p-2 lg:p-2">
          <div className="col-span-1 lg:col-span-2 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
              {dataBoxs.map((item, index) => {
                return (
                  <article
                    key={index}
                    className="p-4 bg-white dark:bg-black dark:border-2 dark:border-[#2D3748] rounded-md shadow-md cursor-pointer"
                  >
                    <div className=" flex items-center gap-3 flex-wrap">
                      <div className="p-2 bg-[#FFD700] border-indigo-300 rounded-xl dark:border-[white] ">
                        <span className="  text-xl text-[white]">
                          {item.icon}
                        </span>
                      </div>
                      <h3 className=" text-base font-medium text-[#A0AEC0] dark:text-white">
                        {item.name}
                      </h3>
                    </div>
                    <div className="text-gray-700 flex items-center justify-between  flex-wrap py-3 ">
                      <span className=" text-2xl font-bold dark:text-white">
                        {item.total}
                      </span>
                      <div className=" flex items-center gap-1 p-2  rounded-lg">
                        <p className="text-[#48BB78] font-bold ">
                          {item.label}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className=" text-gray-500 mt-3 dark:text-white">
                      <p>{item.date}</p>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="w-full bg-white mt-3 dark:bg-black dark:border-2 dark:border-[#2D3748] rounded-md shadow-md">
              <ChartContainer
                config={chartConfig}
                className="min-h-[100px] w-full shadow-md rounded-lg "
              >
                <BarChart
                  accessibilityLayer
                  data={chartData}
                  className="text-black"
                >
                  {" "}
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <Bar
                    dataKey="desktop"
                    fill="var(--color-desktop)"
                    radius={4}
                  />
                  <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
              </ChartContainer>
            </div>
          </div>
          <div className="lg:col-span-1 w-full  ">
            <div className=" flex items-center justify-between pb-4">
              <h2 className="text-xl font-semibold">My Schedule</h2>
              <span className="  text-2xl text-[black]">
                <CiCalendar />
              </span>
            </div>

            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border  shadow-md   transition duration-300 bg-white dark:bg-black dark:border-[#2D3748] "
            />

            <div className="mt-3 ">
              <div className=" shadow-md p-3  rounded-lg mb-2 dark:bg-black dark:border-2 dark:border-[#2D3748]">
                <div className=" flex items-center justify-between pb-3">
                  <h3 className=" text-sm">Webnesday, 06 July 2023</h3>
                  <span>
                    <SlOptionsVertical />
                  </span>
                </div>
                <div className=" flex items-center gap-4 py-2">
                  <h3 className=" font-semibold">09:30</h3> |
                  <div className=" flex flex-col">
                    <h4 className=" font-light text-xs">UI/UX Desight</h4>
                    <p className=" font-semibold">Pratical Task Review</p>
                  </div>
                </div>

                <div className=" flex items-center gap-4 py-2">
                  <h3 className=" font-semibold">09:30</h3> |
                  <div className=" flex flex-col">
                    <h4 className=" font-light text-xs">UI/UX Desight</h4>
                    <p className=" font-semibold">Pratical Task Review</p>
                  </div>
                </div>

                <div className=" flex items-center gap-4 py-2">
                  <h3 className=" font-semibold">09:30</h3> |
                  <div className=" flex flex-col">
                    <h4 className=" font-light text-xs">UI/UX Desight</h4>
                    <p className=" font-semibold">Pratical Task Review</p>
                  </div>
                </div>
              </div>

              <div className=" shadow-md p-3  rounded-lg mb-2 dark:bg-black dark:border-2 dark:border-[#2D3748]">
                <div className=" flex items-center justify-between pb-3">
                  <h3 className=" text-sm">Webnesday, 06 July 2023</h3>
                  <span>
                    <SlOptionsVertical />
                  </span>
                </div>
                <div className=" flex items-center gap-4 py-2">
                  <h3 className=" font-semibold">09:30</h3> |
                  <div className=" flex flex-col">
                    <h4 className=" font-light text-xs">UI/UX Desight</h4>
                    <p className=" font-semibold">Pratical Task Review</p>
                  </div>
                </div>

                <div className=" flex items-center gap-4 py-2">
                  <h3 className=" font-semibold">09:30</h3> |
                  <div className=" flex flex-col">
                    <h4 className=" font-light text-xs">UI/UX Desight</h4>
                    <p className=" font-semibold">Pratical Task Review</p>
                  </div>
                </div>

                <div className=" flex items-center gap-4 py-2">
                  <h3 className=" font-semibold">09:30</h3> |
                  <div className=" flex flex-col">
                    <h4 className=" font-light text-xs">UI/UX Desight</h4>
                    <p className=" font-semibold">Pratical Task Review</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 mx-2 my-4  rounded-lg shadow-md dark:bg-black dark:border-2 dark:border-[#2D3748]">
          <div className=" flex items-center justify-between py-1">
            <h3 className=" text-xl font-bold">Attendance Overview</h3>
            <Button variant={"outline"} className=" font-semibold dark:text-white dark:border-white">
              View all
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="dark:text-white">Employees Name</TableHead>
                <TableHead className="dark:text-white">Position</TableHead>
                <TableHead className="dark:text-white">Type</TableHead>
                <TableHead className="dark:text-white">Check In Time</TableHead>
                <TableHead className="dark:text-white">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="p-2">
                <TableCell className="font-medium flex items-center">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      className="h-10 w-10 rounded-full"
                    />
                  </Avatar>
                  <span className="ml-2">John Doe</span>
                </TableCell>
                <TableCell>Team Leader</TableCell>
                <TableCell>Remote</TableCell>
                <TableCell>09:30</TableCell>
                <TableCell>
                  <Button
                    variant={"secondary"}
                    className="text-green-600 bg-[#c1ffe4]"
                  >
                    On time
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium flex items-center">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      className="h-10 w-10 rounded-full"
                    />
                  </Avatar>
                  <span className="ml-2">John Doe</span>
                </TableCell>
                <TableCell>Team Leader</TableCell>
                <TableCell>Remote</TableCell>
                <TableCell>09:30</TableCell>
                <TableCell>
                  <Button
                    variant={"secondary"}
                    className="text-green-600 bg-[#c1ffe4]"
                  >
                    On time
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium flex items-center">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      className="h-10 w-10 rounded-full"
                    />
                  </Avatar>
                  <span className="ml-2">John Doe</span>
                </TableCell>
                <TableCell>Team Leader</TableCell>
                <TableCell>Remote</TableCell>
                <TableCell>09:30</TableCell>
                <TableCell>
                  <Button
                    variant={"destructive"}
                    className="text-[#F45B69] bg-[#ffbac0]"
                  >
                    Late
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
