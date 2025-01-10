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
const ConfirmTranferModal = ({
  isOpen,
  setIsOpen,
  handleUpdateEmployee,
  isLoadingUpdate,
  nameDepartment,
}: any) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className=" text-center">
            Are you sure you want to tranfer this employee different department?
          </DialogTitle>
          <DialogDescription className=" flex gap-2 pt-5 justify-center">
            <Button onClick={() => setIsOpen(false)}>No</Button>
            <Button
              variant={"destructive"}
              onClick={() => handleUpdateEmployee(nameDepartment)}
            >
              {isLoadingUpdate ? <Spinner /> : "Oke"}
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmTranferModal;
