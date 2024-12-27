import React, { useState, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export function PaginationDemo({
  dataPagination,
  setPageCurrent,
  setLimitPage,
}: any) {
  const [totalPages, setTotalPages] = useState(
    Math.ceil(dataPagination.total_records / dataPagination.limit)
  );

  useEffect(() => {
    setTotalPages(
      Math.ceil(dataPagination.total_records / dataPagination.limit)
    );
    setPageCurrent(1);
  }, [dataPagination.total_records, dataPagination.limit]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setPageCurrent(page);
    }
  };

  const handleItemsPerPageChange = (value: string) => {
    const newItemsPerPage = parseInt(value, 10);
    if (!isNaN(newItemsPerPage) && newItemsPerPage > 0) {
      setLimitPage(newItemsPerPage);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (dataPagination.total_pages <= maxVisiblePages) {
      for (let i = 1; i <= dataPagination.total_pages; i++) {
        pageNumbers.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              isActive={dataPagination.page === i}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      // Always show first page
      pageNumbers.push(
        <PaginationItem key={1}>
          <PaginationLink
            href="#"
            isActive={dataPagination.page === 1}
            onClick={() => handlePageChange(1)}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );

      // Add ellipsis if necessary
      if (dataPagination.page > 3) {
        pageNumbers.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      // Add pages around current page
      const startPage = Math.max(2, dataPagination.page - 1);
      const endPage = Math.min(
        dataPagination.total_pages - 1,
        dataPagination.page + 1
      );
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              isActive={dataPagination.page === i}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }

      // Add ellipsis if necessary
      if (dataPagination.page < dataPagination.total_pages - 2) {
        pageNumbers.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      // Always show last page
      pageNumbers.push(
        <PaginationItem key={`"page+"${dataPagination.total_pages}`}>
          <PaginationLink
            href="#"
            isActive={dataPagination.page === dataPagination.total_pages}
            onClick={() => handlePageChange(dataPagination.total_pages)}
          >
            {dataPagination.total_pages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="w-full  mx-auto space-y-4 p-4 mt-4">
      <div className="bg-white dark:bg-black   flex items-center gap-3 flex-wrap">
        <div className="flex items-center space-x-2 ">
          <Label htmlFor="pageSelect" className="whitespace-nowrap">
            Page:
          </Label>
          <Select
            onValueChange={(value) => handlePageChange(parseInt(value, 10))}
          >
            <SelectTrigger className="w-[150px] dark:border-2  dark:border-[#2D3748]" id="pageSelect">
              <SelectValue placeholder="Select page" />
            </SelectTrigger>
            <SelectContent>
              {Array.from(
                { length: dataPagination.total_pages },
                (_, i) => i + 1
              ).map((page) => (
                <SelectItem key={page} value={page.toString()}>
                  {page}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="itemsPerPageSelect" className="whitespace-nowrap">
            Items per page:
          </Label>
          <Select onValueChange={handleItemsPerPageChange}>
            <SelectTrigger className="w-[100px] dark:border-2  dark:border-[#2D3748]" id="itemsPerPageSelect">
              <SelectValue placeholder="Select items" />
            </SelectTrigger>
            <SelectContent>
              {[1, 10, 15, 20, 25].map((value) => (
                <SelectItem key={value} value={value.toString()}>
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Pagination className=" flex justify-end mx-0 w-[62%] ">
          <PaginationContent className="flex-wrap justify-center">
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => handlePageChange(dataPagination.page - 1)}
                className={`dark:text-white${
                  dataPagination.page === 1
                    ? "pointer-events-none opacity-50"
                    : ""
                } sm:mr-2`}
              />
            </PaginationItem>
            <div className="flex flex-wrap justify-center  dark:border-2  dark:border-[#2D3748] dark:rounded-lg">
              {renderPageNumbers()}
            </div>
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() => handlePageChange(dataPagination.page + 1)}
                className={`dark:text-white${
                  dataPagination.page === dataPagination.total_pages
                    ? "pointer-events-none opacity-50"
                    : ""
                } sm:ml-2`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
