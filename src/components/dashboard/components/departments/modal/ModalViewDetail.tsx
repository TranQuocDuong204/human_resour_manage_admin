import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import SkeletonLoader from "../components/SkeletonLoader";

const ModalViewDetail = ({
  isOpenView,
  setIsOpenView,
  dataDetailEmployee,
  isLoading,
}: any) => {
  return (
    <div>
      <Dialog open={isOpenView} onOpenChange={setIsOpenView}>
        <DialogContent
          className="max-w-[325px]"
          id="dialog-content"
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <DialogHeader className="h-full" id="dialog-description">
            <DialogTitle className="text-center text-xl font-bold"></DialogTitle>
            {isLoading ? (
              <SkeletonLoader />
            ) : (
              <div className="flex  flex-col items-center justify-evenly">
                <div>
                  <img
                    src={
                      dataDetailEmployee?.avatar ||
                      "https://avatars.githubusercontent.com/u/124599?v=4"
                    }
                    alt="Avatar"
                    className=" rounded-full w-[100px] h-[100px] object-cover"
                  />
                </div>

                {/* content */}

                <div className="flex flex-col text-center gap-3">
                  <div className="py-2 border-b-2">
                    <h2 className="text-3xl font-bold text-center">
                      {dataDetailEmployee?.username}
                    </h2>
                    <p className=" text-gray-500  text-sm">
                      {dataDetailEmployee?.nationality}
                    </p>
                  </div>
                  <div className=" py-5 flex flex-col gap-2">
                    <div className=" flex items-center gap-4">
                      <span className=" font-semibold">Email:</span>

                      <p>{dataDetailEmployee?.email}</p>
                    </div>
                    <div className=" flex items-center gap-4">
                      <span className=" font-semibold">Department:</span>
                      <p>{dataDetailEmployee?.name_department}</p>
                    </div>
                    <div className=" flex items-center gap-4">
                      <span className=" font-semibold">Phone Number:</span>
                      <p>+99{dataDetailEmployee?.phone_number}</p>
                    </div>

                    <div className=" flex items-center gap-4">
                      <span className=" font-semibold">Office Location:</span>
                      <p>{dataDetailEmployee?.office_location}</p>
                    </div>

                    <div className=" flex items-center gap-4">
                      <span className=" font-semibold">Employees Type:</span>
                      <p>{dataDetailEmployee?.employee_type}</p>
                    </div>
                  </div>
                  <div>
                    <Button className="w-full sm:w-auto">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ModalViewDetail;
