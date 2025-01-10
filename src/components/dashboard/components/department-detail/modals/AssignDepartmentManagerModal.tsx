import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import CardInfoDepartmentModal from "./CardInfoDepartmentModal";
import SelectEmployeeModal from "./SelectEmployeeModal";
import handleApi from "@/config/handleApi";
import { toast } from "@/hooks/use-toast";
interface IPropAssignDepartmentManagerModal {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataDetailDepartment: any;
  setDataDetail: any;
}
const AssignDepartmentManagerModal = ({
  isOpen,
  setIsOpen,
  dataDetailDepartment,
  setDataDetail,
}: IPropAssignDepartmentManagerModal) => {
  const [newManager, setNewManager] = React.useState("");
  const [isLoadingUpdate, setIsLoadingUpdate] = React.useState(false);
  const [idEmployee, setIdEmployee] = React.useState("");

  const handleClose = () => {
    setIsOpen(false);
    setNewManager("");
    setIdEmployee("");
  };

  const handleUpdateManager = async () => {
    setIsLoadingUpdate(true);
    try {
      const res = await handleApi(
        `/departments/update_manager`,
        {
          department_id: dataDetailDepartment.id,
          new_manager_id: idEmployee,
        },
        "put"
      );
      const result = await res.data;

      if (result.manager) {
        setIsLoadingUpdate(false);

        handleClose();

        setDataDetail((prev: any) => {
          const updatedEmployees = prev.employees.filter(
            (employee: any) => employee.id !== result.manager.id
          );

          return {
            ...prev,
            employees: [...updatedEmployees, result.manager],
          };
        });
        toast({
          variant: "default",
          title: `Success`,
          description: "Update department successfully",
        });
      }

      if (result.error) {
        toast({
          variant: "destructive",
          title: `Error`,
          description: "Update department failed",
        });
        handleClose();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingUpdate(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-800 dark:text-white">
            Assign a New Manager
          </DialogTitle>

          <section className="mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Select a new manager for the Marketing Department
            </p>
          </section>
          <section className="space-y-6">
            <CardInfoDepartmentModal
              nameDepartment={dataDetailDepartment.name_department}
              newManager={newManager}
            />
            <SelectEmployeeModal
              employees={dataDetailDepartment.employees}
              setNewManager={setNewManager}
              setIdEmployee={setIdEmployee}
              newManager={newManager}
            />
          </section>

          <DialogDescription className=" flex gap-2 pt-5 justify-center">
            <Button onClick={() => handleClose()}>No</Button>
            <Button onClick={handleUpdateManager} className="bg-red-600">
              {isLoadingUpdate ? <Spinner className="text-white " /> : "Oke"}
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AssignDepartmentManagerModal;
