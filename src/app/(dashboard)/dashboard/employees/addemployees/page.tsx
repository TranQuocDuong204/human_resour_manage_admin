"use client"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"
import { FaCloudArrowDown } from "react-icons/fa6";
const AddEmployeePage = () => {
    const [tabValue, setTabValue] = useState("account");
    const nextTab = () => {
        if (tabValue === "account") {
            setTabValue("password");
        } else if (tabValue === "password") {
            setTabValue("password1");
        } else if (tabValue === "password1") {
            setTabValue("password2");
        }
    };
    const prevTab = () => {
        if (tabValue === "password") {
            setTabValue("account");
        } else if (tabValue === "password1") {
            setTabValue("password");
        } else if (tabValue === "password2") {
            setTabValue("password1");
        }
    }

    return (
        <div className="p-3 mx-4 my-4 rounded-md border-2 border-gray-200">
            <Tabs value={tabValue} onValueChange={setTabValue} className="">
                <TabsList className="bg-[#FFD700] h-full text-white p-3 flex flex-col justify-start overflow-auto md:flex-row w-full">
                    <TabsTrigger value="account" className="border-none ">Personal Information</TabsTrigger>
                    <TabsTrigger value="password" className="border-none ">Professional Information</TabsTrigger>
                    <TabsTrigger value="password1" className="border-none ">Documents</TabsTrigger>
                    <TabsTrigger value="password2" className="border-none ">Account Access</TabsTrigger>
                </TabsList>

                <TabsContent value="account">
                    <div className=" grid grid-cols-1  md:grid-cols-2 gap-6 flex-wrap mt-5">

                        <div className="grid w-full max-w-lg items-center justify-self-center md:justify-self-start gap-1.5">

                            <Label htmlFor="picture">Avatar</Label>
                            <Input id="picture" type="file" />
                        </div>
                        <div className=" grid w-full max-w-lg items-center justify-self-center md:justify-self-start  gap-1.5">
                            <Label htmlFor="email">Phone Number</Label>
                            <Input placeholder="Phone Number" type="number" />
                        </div>

                        <div className=" grid w-full max-w-lg items-center justify-self-center md:justify-self-start gap-1.5">
                            <Label htmlFor="dob">Date of Birth</Label>
                            <Input placeholder="Date of Birth" type="date" />
                        </div>

                        <div className=" grid w-full max-w-lg items-center justify-self-center md:justify-self-start gap-1.5">
                            <Label htmlFor="dob">Marital Status</Label>
                            <select name="marital" id="#" className=" border-2 border-gray-200 p-1.5 rounded-md">
                                <option value="">----</option>
                                <option value="married">Married</option>
                                <option value="single">Single</option>
                                <option value="divorced">Divorced</option>
                            </select>
                        </div>
                        <div className=" grid w-full max-w-lg items-center justify-self-center md:justify-self-start gap-1.5">
                            <Label htmlFor="dob">Gender</Label>
                            <select name="gender" id="#" className=" border-2 border-gray-200 p-1.5 rounded-md">
                                <option value="">----</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className=" grid w-full max-w-lg items-center justify-self-center md:justify-self-start gap-1.5">
                            <Label htmlFor="nationality">Nationality</Label>
                            <Input placeholder="Nationality" type="text" />
                        </div>

                        <div className=" grid w-full max-w-lg items-center justify-self-center md:justify-self-start gap-1.5">
                            <Label htmlFor="address">Address</Label>
                            <Input placeholder="Address" type="text" />
                        </div>
                    </div>
                    <div className=" mt-3 flex  justify-end items-center">
                        <Button onClick={nextTab} className="mr-8 px-4 bg-[#000000]">Next</Button>
                    </div>
                </TabsContent>

                <TabsContent value="password">
                    <div>
                        {/* Các thông tin trong tab này */}
                        <Button onClick={prevTab}>Prev</Button>
                        <Button onClick={nextTab}>Next</Button>
                    </div>
                </TabsContent>

                <TabsContent value="password1">
                    <div>
                        {/* Các thông tin trong tab này */}
                        <Button onClick={prevTab}>Prev</Button>
                        <Button onClick={nextTab}>Next</Button>
                    </div>
                </TabsContent>

                <TabsContent value="password2">
                    <div>
                        {/* Các thông tin trong tab này */}
                        <Button onClick={prevTab}>Prev</Button>
                        <Button onClick={() => console.log("Submit data to server")}>Save</Button>
                    </div>
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default AddEmployeePage