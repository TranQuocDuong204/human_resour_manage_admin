"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { IoIosAddCircle } from "react-icons/io";
import { BsFilter } from "react-icons/bs";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import ModalAddEmployees from "../modals/ModalAddEmployees";
interface EmployeesActionProps {
    onSearch: (query: string) => void;
    onAddnew: () => void;
    onFilter: () => void;
}

const EmployeesAction = ({ onSearch, onAddnew, onFilter }: EmployeesActionProps) => {
    const router = useRouter()
    const auth = localStorage.getItem('auth') ?? null;
    const parsedAuth = auth ? JSON.parse(auth) : null;
    const info = parsedAuth.response
    const [isOpen, setIsOpen] = useState(false)

    const redirectAddNew = () => {
        if (info.role === 'admin' || info.role === 'hr') {
            router.push('/dashboard/employees/addemployees')
        } else {
            alert('You are not allowed to add new employee')
        }
    }


    const handleOpenDialog = () => {
        if (info.role === "admin" || info.role === "hr") {
            setIsOpen(!isOpen)
        } else {
            alert('You are not allowed to add new employee')
        }
    }
    return (
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:items-center sm:space-y-0">

            <Input
                placeholder="Search employees"
                className="sm:w-64 md:w-80 dark:border-2 dark:border-[#5f656e] "
                onChange={(e) => onSearch(e.target.value)}
            />
            <div className=" flex items-center gap-3">
                <ModalAddEmployees isOpen={isOpen} setIsOpen={setIsOpen} info={info} />
                <Button variant={"outline"} disabled={info.role === "staff"} className="px-5 flex items-center bg-black text-white font-semibold space-x-2 dark:bg-white dark:text-black" onClick={handleOpenDialog}> <IoIosAddCircle />Add New User  </Button>
                <Button variant={"outline"} className=" flex items-center font-semibold dark:border-2"><BsFilter />Fillter</Button>
            </div>
        </div>
    )
}

export default EmployeesAction