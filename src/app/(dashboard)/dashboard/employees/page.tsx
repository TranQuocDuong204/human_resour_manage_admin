"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { IoIosAddCircle } from "react-icons/io";
import { BsFilter } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { FiTrash2 } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Spinner } from '@/components/ui/spinner';
import { useRouter } from 'next/navigation'
const EmployeesPage = () => {
    const [dataEmployee, setDataEmployee] = useState<any[]>([]);
    const [dataUser, setDataUser] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()
    const auth = localStorage.getItem('auth') ?? null;
    const parsedAuth = auth ? JSON.parse(auth) : null;
    const info = parsedAuth.response

    const getDataEmployee = async () => {
        setIsLoading(true)
        try {
            const res = await fetch('http://127.0.0.1:8000/employees/');
            const result = await res.json()
            setDataEmployee(result)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }

    const getDataUser = async () => {
        try {
            const res = await fetch('http://127.0.0.1:8000/users/');
            const result = await res.json()
            setDataUser(result);
        } catch (error) {
            console.log(error);
        }
    }

    const getNameUser = (idUser: string): any => {
        if (!dataUser.length) return 'Loading..';
        const user = dataUser.find((user: any) => user.id === idUser);
        return user ? user.username : 'Unknown';
    }

    const redirectAddNew = () => {
        if (info.role === 'admin' || info.role === 'hr') {
            router.push('/dashboard/employees/addemployees')
        } else {
            alert('You are not allowed to add new employee')
        }
    }
    useEffect(() => {
        getDataEmployee();
        getDataUser();
    }, [])

    return (
        <div>
            <div className="p-3 mx-4 my-4 rounded-md border-2 border-gray-200">
                <div className=" flex items-center justify-between gap-3 py-3 flex-col lg:flex-row ">
                    <Input placeholder="Search" className=" w-[80%] lg:max-w-[20%] p-5 " />
                    <div className=" flex items-center gap-3">
                        <Button variant={"outline"} className="px-5 flex items-center bg-black text-white font-semibold" onClick={redirectAddNew}> <IoIosAddCircle />Add New Employee  </Button>
                        <Button variant={"outline"} className=" flex items-center font-semibold"><BsFilter />Fillter</Button>
                    </div>
                </div>
                {isLoading ? <Spinner className="text-[#FFD700]" /> : <Table>
                    <TableHeader>
                        <TableRow >
                            <TableHead className=" font-normal text-gray-500">Employees Name</TableHead>
                            <TableHead className=" font-normal text-gray-500">Employees ID</TableHead>
                            <TableHead className=" font-normal text-gray-500">Position</TableHead>
                            <TableHead className=" font-normal text-gray-500">Employee_Type</TableHead>
                            <TableHead className=" font-normal text-gray-500">Office_Location</TableHead>
                            <TableHead className=" font-normal text-gray-500">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {dataEmployee && dataEmployee.map((i: any) => {
                            return (
                                <TableRow className="p-2" key={i.id}>
                                    <TableCell className="font-medium flex items-center">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" className="h-10 w-10 rounded-full" />
                                        </Avatar>
                                        <span className="ml-2">{getNameUser(i.user_id)}</span>
                                    </TableCell>
                                    <TableCell>{i.id.slice(0, 8)}...</TableCell>
                                    <TableCell>{i.position}</TableCell>
                                    <TableCell>{i.employee_type}</TableCell>
                                    <TableCell>{i.office_location}</TableCell>
                                    <TableCell className=" flex items-center text-lg gap-3 mb-5">
                                        <IoEyeOutline className=" cursor-pointer" />
                                        <CiEdit className=" cursor-pointer" />
                                        <FiTrash2 className=" cursor-pointer" />
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>}
            </div>
        </div>
    );
}

export default EmployeesPage