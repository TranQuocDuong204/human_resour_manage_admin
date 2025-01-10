import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import { MdCancel } from "react-icons/md";
import { Button } from "@/components/ui/button";
export function LabelFilter({
  itemFilter,
  datafilter,
  setLabelFilter,
  handleSetItemFilter,
  resetItemFilter,
  itemFilterName,
}: any) {
  const [selectedDisplay, setSelectedDisplay] = React.useState<any>({
    valueDisplay: "",
  });

  const handleSelectChange = (value: string) => {
    handleSetItemFilter(itemFilter.key, value);
    setSelectedDisplay((prev: any) => ({ ...prev, valueDisplay: value }));
  };

  const handleRemoteFilter = () => {
    setLabelFilter((prev: any) =>
      prev.filter((item: any) => item.name !== itemFilter.name)
    );
    resetItemFilter(itemFilter.key);
  };

  return (
    <div className="space-y-2 mt-2">
      <Select onValueChange={handleSelectChange}>
        <div className=" flex items-center gap-1">
          <SelectTrigger className="min-w-[140px] h-auto max-h-[2.5rem] py-1 rounded-3xl border border-gray-300 shadow-sm hover:shadow-md transition duration-150">
            <span>
              {selectedDisplay.valueDisplay
                ? selectedDisplay.valueDisplay
                : `${itemFilter.name}`}
            </span>
          </SelectTrigger>
          <span
            className="cursor-pointer text-gray-500 hover:text-red-500 transition"
            onClick={handleRemoteFilter}
          >
            <MdCancel className="h-5 w-5" />
          </span>
        </div>

        <SelectContent>
          <SelectGroup>
            <SelectLabel>{itemFilter.name}</SelectLabel>

            {datafilter.length === 0 ? (
              <div className="p-2 text-gray-500 text-sm italic">
                No options available
              </div>
            ) : (
              datafilter.map((item: any, index: number) => {
                return (
                  <SelectItem key={index} value={item}>
                    {item}
                  </SelectItem>
                );
              })
            )}

            {itemFilterName[itemFilter.key] && (
              <div className="mt-4 flex justify-end">
                <Button
                  onClick={() => {
                    resetItemFilter(itemFilter.key);
                    setSelectedDisplay({ valueDisplay: "" });
                  }}
                  variant="secondary"
                  className="text-sm"
                >
                  Reset
                </Button>
              </div>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
