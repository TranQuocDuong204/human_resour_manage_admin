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

const ModalCheck = ({
  isOpen,
  setIsOpen,
  isDeletedId,
  handleDeleted,
  isLoadingDelete,
}: any) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className=" text-center">
            Are you sure you want to delete this employee?
          </DialogTitle>
          <DialogDescription className=" flex gap-2 pt-5 justify-center">
            <Button onClick={() => setIsOpen(false)}>No</Button>
            <Button
              variant={"destructive"}
              onClick={() => handleDeleted(isDeletedId)}
            >
              {isLoadingDelete ? <Spinner /> : "Oke"}
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ModalCheck;
