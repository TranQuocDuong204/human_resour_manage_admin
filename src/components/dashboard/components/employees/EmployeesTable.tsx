import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { IoEyeOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { FiTrash2 } from "react-icons/fi";
import { Spinner } from "@/components/ui/spinner";

import { IEmployee } from "@/types/Employees";
import Loader from "../../Loader";

interface EmployeesTableProps {
  isLoading: boolean;
  dataEmployee: IEmployee[];
  getNameUser: (id: any) => string;
}
const EmployeesTable = ({
  isLoading,
  dataEmployee,
  getNameUser,
}: EmployeesTableProps) => {
  return (
    <div className=" mt-4">
      {isLoading ? (
        <div
          className="
         flex justify-center items-center p-4
        "
        >
          <Loader />
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className=" font-normal text-gray-500 dark:text-white">
                Employees Name
              </TableHead>
              <TableHead className=" font-normal text-gray-500 dark:text-white">
                Employees ID
              </TableHead>
              <TableHead className=" font-normal text-gray-500 dark:text-white">
                Position
              </TableHead>
              <TableHead className=" font-normal text-gray-500 dark:text-white">
                Employee_Type
              </TableHead>
              <TableHead className=" font-normal text-gray-500 dark:text-white">
                Office_Location
              </TableHead>
              <TableHead className=" font-normal text-gray-500 dark:text-white">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataEmployee &&
              dataEmployee.map((i: any) => {
                return (
                  <TableRow className="p-2" key={i.id}>
                    <TableCell className="font-medium flex items-center">
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          className="h-10 w-10 rounded-full"
                        />
                      </Avatar>
                      <span className="ml-2">{getNameUser(i.user_id)}</span>
                    </TableCell>
                    <TableCell>{i.id.slice(0, 8)}...</TableCell>
                    <TableCell>{i.position}</TableCell>
                    <TableCell>{i.employee_type}</TableCell>
                    <TableCell>{i.office_location}</TableCell>
                    <TableCell className=" flex items-center text-lg gap-3 mb-5">
                      <IoEyeOutline className=" cursor-pointer" />
                      <CiEdit className=" cursor-pointer" />
                      <FiTrash2 className=" cursor-pointer" />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default EmployeesTable;
