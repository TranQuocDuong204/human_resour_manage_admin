import React from "react";
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
import { Avatar, AvatarImage } from "@/components/ui/avatar";
const AttendanceOverview = () => {
  return (
    <div className="p-3 mx-2 my-4  rounded-lg shadow-md dark:bg-black dark:border-2 dark:border-[#2D3748]">
      <div className=" flex items-center justify-between py-1">
        <h3 className=" text-xl font-bold">Attendance Overview</h3>
        <Button
          variant={"outline"}
          className=" font-semibold dark:text-white dark:border-white"
        >
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
  );
};

export default AttendanceOverview;
