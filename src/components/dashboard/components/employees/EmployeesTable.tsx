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
import { FiTrash2 } from "react-icons/fi";
import { toast } from "@/hooks/use-toast";
import { IEmployee } from "@/types/Employees";
import Loader from "../../Loader";
import { useState } from "react";
import ModalCheck from "./modals/ModalCheck";
import ModalView from "./modals/ModalView";
import handleApi from "@/config/handleApi";

const tableHeader: ITableHeader[] = [
  { label: "Avatar", width: "10%" },
  { label: "Employees Name", width: "20%" },
  { label: "Department", width: "15%" },
  { label: "Position", width: "14%" },
  { label: "Employee Type", width: "15%" },
  { label: "Office Location", width: "15%" },
  { label: "Status", width: "15%" },
];

interface ITableHeader {
  label: string;
  width: string;
}
interface EmployeesTableProps {
  isLoading: boolean;
  dataEmployee: IEmployee[];
  setDataEmployee: (data: any) => void;
  // handleSearch: any[];
}

interface IEmployeeData {
  avatar?: string;
  userName?: string;
  nationality?: string;
  email?: string;
  departmentName?: string;
  phone_number?: string;
  office_location?: string;
  employee_type?: string;
}

const EmployeesTable = ({
  isLoading,
  dataEmployee,
  setDataEmployee,
}: // handleSearch,
EmployeesTableProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenView, setIsOpenView] = useState(false);
  const [idEmployees, setIdEmployees] = useState("");
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [dataDetailEmployee, setDataDetailEmployee] =
    useState<IEmployeeData | null>(null);

  const handleDeleted = async (id: any) => {
    setIsLoadingDelete(true);
    try {
      const res = await handleApi(
        `/employees/${id}`,
        { is_active: false },
        "put"
      );
      const data = res.data;
      const dataRemove = data.data.find((item: any) => item);
      setDataEmployee((prev: any) =>
        prev.filter((item: any) => item.id !== dataRemove.id)
      );
      setIsOpen(false);
      setIsLoadingDelete(false);
      toast({
        variant: "default",
        title: `Success`,
        description: `${data.message}`,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingDelete(false);
    }
  };

  const handleView = (item: any) => {
    setDataDetailEmployee(item);
    setIsOpenView(true);
  };

  
  return (
    <div className="mt-3 relative ">
      <Table className="w-full">
        <TableHeader className="sticky top-0 bg-white dark:bg-gray-800 z-10">
          <TableRow>
            {tableHeader.map((header, index) => (
              <TableHead
                key={index}
                className="font-normal text-gray-500 dark:text-white"
                style={{ width: header.width }}
              >
                {header.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
      </Table>
      <div className=" h-[300px] overflow-y-auto  border rounded-md">
        <Table className=" w-full ">
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={7} className="h-full">
                  {" "}
                  {/* Adjusted to match the correct number of columns */}
                  <div className="flex justify-center items-center h-[320px]">
                    <Loader />
                  </div>
                </TableCell>
              </TableRow>
            ) : dataEmployee?.length > 0 ? (
              dataEmployee.map((i: any) => (
                <TableRow key={i.id} className="min-h-[50px]">
                  <TableCell className="font-medium w-[10%]">
                    <div className="flex items-center">
                      <Avatar>
                        <AvatarImage
                          src={i.avatar || "https://github.com/shadcn.png"}
                          className="h-10 w-10 rounded-full"
                        />
                      </Avatar>
                    </div>
                  </TableCell>
                  <TableCell className="w-[20%]">
                    {i?.users?.username}
                  </TableCell>
                  <TableCell className="w-[15%]">
                    {i?.departments?.name_department}
                  </TableCell>
                  <TableCell className="w-[15%]">{i.position}</TableCell>
                  <TableCell className="w-[15%]">{i.employee_type}</TableCell>
                  <TableCell className="w-[15%]">{i.office_location}</TableCell>
                  <TableCell className="w-[15%]">
                    <div className="flex items-center text-lg gap-3">
                      <IoEyeOutline
                        className="cursor-pointer"
                        onClick={() => handleView(i)}
                      />
                      <FiTrash2
                        className="cursor-pointer"
                        onClick={() => {
                          setIsOpen(!isOpen);
                          setIdEmployees(i.id);
                        }}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center">
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <ModalCheck
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isDeletedId={idEmployees}
        handleDeleted={handleDeleted}
        isLoadingDelete={isLoadingDelete}
      />
      <ModalView
        isOpenView={isOpenView}
        setIsOpenView={setIsOpenView}
        dataDetailEmployee={dataDetailEmployee}
      />
    </div>
  );
};

export default EmployeesTable;
