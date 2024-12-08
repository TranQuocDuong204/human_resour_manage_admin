"use client"

import { useEffect, useState } from "react";
import EmployeesAction from "./employees-action"
import EmployeesTable from "./employees-table";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
const EmployeesDashboard = () => {
    const [dataEmployee, setDataEmployee] = useState<any[]>([]);
    const [dataUser, setDataUser] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);


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

    useEffect(() => {
        getDataEmployee();
        getDataUser();
    }, [])
    const handleSearch = () => {
        console.log('search');

    }
    const handleAddNew = () => {
        console.log('add new');

    }

    const handleFilter = () => {
        console.log('filter');
    }
    return (
        <Card className="w-full">
            <CardHeader className="px-6 py-4">
                <CardTitle className=" text-xl">Employee Management</CardTitle>
            </CardHeader>
            <CardContent>
                <EmployeesAction onSearch={handleSearch} onAddnew={handleAddNew} onFilter={handleFilter} />
                <EmployeesTable isLoading={isLoading} dataEmployee={dataEmployee} getNameUser={(id: any) => {
                    return getNameUser(id);
                }} />

            </CardContent>

        </Card>
    )
}

export default EmployeesDashboard