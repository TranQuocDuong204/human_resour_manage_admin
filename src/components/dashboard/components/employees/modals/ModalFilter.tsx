import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
const ModalFilter = ({ isOpen, setIsOpen, isDeletedId }: any) => {
  const [selectedCheck, setSelectedCheck] = useState<string[]>([]);
  const items = [
    {
      id: "recents",
      label: "Recents",
    },
    {
      id: "home",
      label: "Home",
    },
    {
      id: "applications",
      label: "Applications",
    },
    {
      id: "desktop",
      label: "Desktop",
    },
    {
      id: "downloads",
      label: "Downloads",
    },
    {
      id: "documents",
      label: "Documents",
    },
  ];

  const item2 = [
    {
      id: 1,
      value: "full-time",
      name: "radios",
    },
    {
      id: 2,
      value: "part-time",
      name: "radios",
    },
  ];

  const handleCheckboxChange = (checked: any, id: string) => {
    
    setSelectedCheck((prev) => checked ? [...prev, id] : prev.filter(item => item !== id))
    // if (checked) {
    //   setSelectedCheck((prev) => [...prev, id]);
    // } else {
    //   setSelectedCheck((prev) => prev.filter((item) => item !== id));
    // }
  };
console.log(selectedCheck);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className="max-w-[325px]"
        id="dialog-content"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogHeader>
          <DialogTitle className=" text-2xl font-bold ">Filter</DialogTitle>

          <div>
            <h2 className=" text-lg font-semibold">Department</h2>
            <div className="grid grid-cols-2 gap-2 mt-3">
              {items.map((item: any) => (
                <div key={item.id} className="basis-1/2 ">
                  <Checkbox
                    name="department"
                    key={item.id}
                    value={item.label}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange(checked, item.id)
                    }
                    className="h-4 w-4 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <label
                    htmlFor={item.id}
                    className="ml-2 text-sm text-gray-700"
                  >
                    {item.label}
                  </label>
                </div>
              ))}
            </div>

            <h2 className=" text-lg font-semibold mt-3">Select Type</h2>
            <div className="flex items-center gap-5 mt-3">
              {item2.map((item: any) => (
                <div className="flex items-center space-x-2" key={item.id}>
                  <input
                    type="radio"
                    value={item.value}
                    id="option-two"
                    name={item.name}
                  />
                  <Label htmlFor="option-one">{item.value}</Label>
                </div>
              ))}
            </div>
          </div>

          <DialogDescription className=" flex gap-2 pt-5 justify-center">
            <Button onClick={() => setIsOpen(false)}>No</Button>
            <Button variant={"destructive"}>Oke</Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ModalFilter;
