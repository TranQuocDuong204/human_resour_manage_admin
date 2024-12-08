"use client"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"
import { FaCloudArrowDown } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { LuBriefcase } from "react-icons/lu";
import { FiFileText } from "react-icons/fi";
import { FiKey } from "react-icons/fi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
const AddEmployeePage = () => {
    const [tabValue, setTabValue] = useState("personal");
    const nextTab = () => {
        const tabs = ["personal", "professional", "documents", "access"]
        const currentIndex = tabs.indexOf(tabValue)
        if (currentIndex < tabs.length - 1) {
            setTabValue(tabs[currentIndex + 1])
        }
    };
    const prevTab = () => {
        const tabs = ["personal", "professional", "documents", "access"]
        const currentIndex = tabs.indexOf(tabValue)
        if (currentIndex > 0) {
            setTabValue(tabs[currentIndex - 1])
        }
    }

    return (
        <div className="p-3 mx-4 my-4 rounded-md border-2 border-gray-200">
            <Tabs value={tabValue} onValueChange={setTabValue} className="w-full">
                <TabsList className="bg-[#FFD700] h-full text-white p-3 grid w-full grid-cols-4">
                    <TabsTrigger value="personal" className="border-none px-1 py-2 flex items-center gap-2">
                        <FiUser className="h-4 w-4" />
                        <span className="hidden sm:inline"> Personal Information</span>
                    </TabsTrigger>
                    <TabsTrigger value="professional" className="border-none py-2 flex items-center gap-2">
                        <LuBriefcase className="h-4 w-4" />
                        <span className="hidden sm:inline"> Professional Information</span>
                    </TabsTrigger>
                    <TabsTrigger value="documents" className="border-none py-2 flex items-center gap-2">
                        <FiFileText className="h-4 w-4" />
                        <span className="hidden sm:inline">Documents</span>
                    </TabsTrigger>
                    <TabsTrigger value="access" className="border-none py-2 flex items-center gap-2">
                        <FiKey className="h-4 w-4" />
                        <span className="hidden sm:inline"> Account Access</span>
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="personal">
                    <div className=" grid grid-cols-1  md:grid-cols-2 gap-6 flex-wrap mt-5">

                        <div className=" flex flex-col  items-center gap-4">

                            <Avatar className="w-20 h-20">
                                <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Avatar" />
                                <AvatarFallback>Avatar</AvatarFallback>
                            </Avatar>
                            <Input id="picture" type="file" className="w-full max-w-xs" />
                        </div>
                        <div className=" space-y-4">
                            <div className=" grid w-full items-center gap-1.5">
                                <Label htmlFor="email">Phone Number</Label>
                                <Input placeholder="Phone Number" type="tel" />
                            </div>

                            <div className=" grid w-full items-center gap-1.5">
                                <Label htmlFor="dob">Date of Birth</Label>
                                <Input placeholder="Date of Birth" type="date" />
                            </div>

                        </div>

                        <div className=" grid w-full items-center gap-1.5">
                            <Label htmlFor="dob">Marital Status</Label>
                            <select name="marital" id="#" className=" border-2 border-gray-200 p-1.5 rounded-md">
                                <option value="">----</option>
                                <option value="married">Married</option>
                                <option value="single">Single</option>
                                <option value="divorced">Divorced</option>
                            </select>
                        </div>
                        <div className=" grid w-full items-center gap-1.5">
                            <Label htmlFor="dob">Gender</Label>
                            <select name="gender" id="#" className=" border-2 border-gray-200 p-1.5 rounded-md">
                                <option value="">----</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="nationality">Nationality</Label>
                            <Input placeholder="Nationality" type="text" />
                        </div>

                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="address">Address</Label>
                            <Input placeholder="Address" type="text" />
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="professional">

                    <div className=" grid grid-cols-1  md:grid-cols-2 gap-6 flex-wrap mt-5">
                        <div className="grid w-full gap-1.5">
                            <Label htmlFor="username">User name</Label>
                            <Input id="username" placeholder="User name" />
                        </div>
                        <div className="grid w-full gap-1.5">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" placeholder="Email Address" />
                        </div>

                        <div className="grid w-full gap-1.5">
                            <Label htmlFor="dob">Select Employees Types</Label>
                            <select name="employees" id="#" className=" border-2 border-gray-200 p-1.5 rounded-md">
                                <option value="">----</option>
                                <option value="office">Office</option>
                                <option value="remote">Remote</option>

                            </select>
                        </div>


                        <div className="grid w-full gap-1.5">
                            <Label htmlFor="dob">Select Department</Label>
                            <select name="department" id="#" className=" border-2 border-gray-200 p-1.5 rounded-md">
                                <option value="">----</option>
                                <option value="office">Office</option>
                                <option value="remote">Remote</option>

                            </select>
                        </div>

                        <div className="grid w-full gap-1.5">
                            <Label htmlFor="dob">Select Working Days</Label>
                            <select name="days" id="#" className=" border-2 border-gray-200 p-1.5 rounded-md">
                                <option value="">----</option>
                                <option value="office">Office</option>
                                <option value="remote">Remote</option>

                            </select>
                        </div>

                        <div className="grid w-full gap-1.5">
                            <Label htmlFor="dob">Select Office Location</Label>
                            <select name="days" id="#" className=" border-2 border-gray-200 p-1.5 rounded-md">
                                <option value="">----</option>
                                <option value="office">Office</option>
                                <option value="remote">Remote</option>

                            </select>
                        </div>

                        <div className=" grid w-full items-center gap-1.5">
                            <Label htmlFor="dob">Select date join</Label>
                            <Input placeholder="Date of Birth" type="date" />
                        </div>

                    </div>
                </TabsContent>

                <TabsContent value="documents">
                    <div className="space-y-4">
                        <div className="grid w-full gap-1.5">
                            <Label htmlFor="resume">Resume/CV</Label>
                            <Input id="resume" type="file" />
                        </div>
                        <div className="grid w-full gap-1.5">
                            <Label htmlFor="id-proof">ID Proof</Label>
                            <Input id="id-proof" type="file" />
                        </div>
                        <div className="grid w-full gap-1.5">
                            <Label htmlFor="certificates">Certificates</Label>
                            <Input id="certificates" type="file" multiple />
                        </div>
                        <div className="grid w-full gap-1.5">
                            <Label htmlFor="other-docs">Other Documents</Label>
                            <Input id="other-docs" type="file" multiple />
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="access">
                    <div className="space-y-4">
                        <div className="grid w-full gap-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Email" />
                        </div>
                        <div className="grid w-full gap-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" placeholder="Password" />
                        </div>
                        <div className="grid w-full gap-1.5">
                            <Label htmlFor="confirm-password">Confirm Password</Label>
                            <Input id="confirm-password" type="password" placeholder="Confirm Password" />
                        </div>
                        <div className="grid w-full gap-1.5">
                            <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                            <select name="days" id="#" className=" border-2 border-gray-200 p-1.5 rounded-md">
                                <option value="">----</option>
                                <option value="office">Office</option>
                                <option value="remote">Remote</option>

                            </select>

                        </div>
                    </div>
                </TabsContent>
            </Tabs>
            <div className=" my-4">
                <div className=" flex justify-between">
                    <Button variant="outline" onClick={prevTab} disabled={tabValue === "personal"}>
                        Previous
                    </Button>
                    <Button onClick={tabValue === "access" ? () => console.log("Submit data to server") : nextTab}>
                        {tabValue === "access" ? "Save" : "Next"}
                    </Button>
                </div> </div>

        </div>
    )
}

export default AddEmployeePage