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
import { toast } from "@/hooks/use-toast";
import { IEmployee } from "@/types/Employees";
import Loader from "../../Loader";
import { useState, useEffect } from "react";
import ModalCheck from "./modals/ModalCheck";
import ModalView from "./modals/ModalView";

interface EmployeesTableProps {
  isLoading: boolean;
  dataEmployee: IEmployee[];
  getNameUser: (id: any) => string;
  setDataEmployee: (data: any) => void;
  dataUser: any[];
  handleSearch: any[];
  dataDepartment: any[];
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
  dataDepartment,
  getNameUser,
  setDataEmployee,
  dataUser,
  handleSearch,
}: EmployeesTableProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenView, setIsOpenView] = useState(false);
  const [idEmployees, setIdEmployees] = useState("");
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [dataDetailEmployee, setDataDetailEmployee] =
    useState<IEmployeeData | null>(null);

  const handleDeleted = async (id: any) => {
    setIsLoadingDelete(true);
    try {
      const res = await fetch(`http://127.0.0.1:8000/employees/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ is_active: false }),
      });
      const data = await res.json();
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

  const handleGetDetail = async (id: string) => {
    const dataDetail = dataEmployee.filter((item: any) => item.id === id);

    const dataNewDetail = dataUser.find(
      (item: any) => item.id === dataDetail[0].user_id
    );
    const dataNewDepartment = dataDepartment.find(
      (item: any) => item.id === dataDetail[0]?.department_id
    );
    const inforDetail = {
      ...dataDetail[0],
      email: dataNewDetail.email,
      userName: dataNewDetail.username,
      departmentName: dataNewDepartment?.name_department,
    };
    setDataDetailEmployee(inforDetail);
  };


  const handleView = (id: string) => {
    handleGetDetail(id);
    setIsOpenView(true);
  };



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
          {handleSearch.length > 0 ? (
            <TableBody>
              {handleSearch.map((i: any) => {
                return (
                  <TableRow className="p-2" key={i.id}>
                    <TableCell className="font-medium flex items-center">
                      <Avatar>
                        <AvatarImage
                          src={
                            i.avatar
                              ? i.avatar
                              : "https://github.com/shadcn.png"
                          }
                          className="h-10 w-10 rounded-full"
                        />
                      </Avatar>
                      <span className="ml-2">{getNameUser(i.user_id)}</span>
                    </TableCell>
                    <TableCell>{i?.id?.slice(0, 8)}...</TableCell>
                    <TableCell>{i.position}</TableCell>
                    <TableCell>{i.employee_type}</TableCell>
                    <TableCell>{i.office_location}</TableCell>
                    <TableCell className="flex items-center text-lg gap-3 mb-5">
                      <IoEyeOutline
                        className="cursor-pointer"
                        onClick={() => handleView(i.id)}
                      />
                      <FiTrash2
                        className="cursor-pointer"
                        onClick={() => (
                          setIsOpen(!isOpen), setIdEmployees(i.id)
                        )}
                      />
                      <ModalCheck
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        isDeletedId={idEmployees}
                        handleDeleted={(id: any) => {
                          handleDeleted(id);
                        }}
                        isLoadingDelete={isLoadingDelete}
                      />
                      <ModalView
                        isOpenView={isOpenView}
                        setIsOpenView={setIsOpenView}
                        iddEmployees={idEmployees}
                        dataDetailEmployee={dataDetailEmployee}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          ) :  (
            <TableBody>
              {dataEmployee.map((i: any) => {
                return (
                  <TableRow className="p-2" key={i.id}>
                    <TableCell className="font-medium flex items-center">
                      <Avatar>
                        <AvatarImage
                          src={
                            i.avatar
                              ? i.avatar
                              : "https://github.com/shadcn.png"
                          }
                          className="h-10 w-10 rounded-full"
                        />
                      </Avatar>
                      <span className="ml-2">{getNameUser(i.user_id)}</span>
                    </TableCell>
                    <TableCell>{i?.id?.slice(0, 8)}...</TableCell>
                    <TableCell>{i.position}</TableCell>
                    <TableCell>{i.employee_type}</TableCell>
                    <TableCell>{i.office_location}</TableCell>
                    <TableCell className="flex items-center text-lg gap-3 mb-5">
                      <IoEyeOutline
                        className="cursor-pointer"
                        onClick={() => handleView(i.id)}
                      />
                      <FiTrash2
                        className="cursor-pointer"
                        onClick={() => (
                          setIsOpen(!isOpen), setIdEmployees(i.id)
                        )}
                      />
                      <ModalCheck
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        isDeletedId={idEmployees}
                        handleDeleted={(id: any) => {
                          handleDeleted(id);
                        }}
                        isLoadingDelete={isLoadingDelete}
                      />
                      <ModalView
                        isOpenView={isOpenView}
                        setIsOpenView={setIsOpenView}
                        iddEmployees={idEmployees}
                        dataDetailEmployee={dataDetailEmployee}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          )}
        </Table>
      )}
    </div>
  );
};

export default EmployeesTable;
