"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { IoIosAddCircle } from "react-icons/io";
import { BsFilter } from "react-icons/bs";
import { useRouter } from 'next/navigation'
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

    const redirectAddNew = () => {
        if (info.role === 'admin' || info.role === 'hr') {
            router.push('/dashboard/employees/addemployees')
        } else {
            alert('You are not allowed to add new employee')
        }
    }
    return (
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
            <Input
                placeholder="Search employees"
                className="sm:w-64 md:w-80"
                onChange={(e) => onSearch(e.target.value)}
            />
            <div className=" flex items-center gap-3">
                <Button variant={"outline"} className="px-5 flex items-center bg-black text-white font-semibold space-x-2" onClick={redirectAddNew}> <IoIosAddCircle />Add New Employee  </Button>
                <Button variant={"outline"} className=" flex items-center font-semibold"><BsFilter />Fillter</Button>
            </div>
        </div>
    )
}

export default EmployeesAction