"use client"
import { z } from "zod"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Dispatch, SetStateAction } from "react"
import { Textarea } from "@/components/ui/textarea"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useEffect, useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"
import { SiConvertio } from "react-icons/si";
import { Controller } from 'react-hook-form';
import { useRouter } from "next/navigation"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string().email({ message: "Invalid email address" }),
    email_personal: z.string().email({ message: "Invalid email address" }),

})
interface IModalAddEmployees {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    info: any
}
const ModalAddEmployees = ({ isOpen, setIsOpen, info }: IModalAddEmployees) => {
    const [isLoading, setIsLoading] = useState(false)
    const [passRanDom, setPassRanDom] = useState("")
    const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State to toggle visibility
    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };
    const { toast } = useToast()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            email_personal: "",
        },
    })

    useEffect(() => {
        if (!isOpen) {
            form.reset({
                username: "",
                email: "",
                email_personal: "",

            })
        }
        setPassRanDom("")
    }, [isOpen, form])
    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        if (passRanDom === "") return toast({
            variant: "destructive",
            title: `Error`,
            description: `Password is required`,
        });
        setIsLoading(true)
        const newData = {
            ...data,
            password: passRanDom,
            is_active: true,
            role: "staff"
        }
        try {
            const res = await fetch("http://127.0.0.1:8000/users/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newData)
            })

            const datas = await res.json()
            if (datas.messages) {
                setIsOpen(false)
                toast({
                    variant: "default",
                    title: `Success`,
                    description: `${datas.messages}`,
                });
            } else if (datas.error) {
                toast({
                    variant: "destructive",
                    title: `Error`,
                    description: `${datas.error}`,
                });
                setIsOpen(false)

            }

        } catch (error) {
            console.log(error);
            toast({
                variant: "destructive",
                title: `Error`,
                description: `${error}`,
            });
        } finally {
            setIsLoading(false)
        }
    }


    function generatePass() {
        let pass = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
            'abcdefghijklmnopqrstuvwxyz0123456789@#$';

        for (let i = 1; i <= 8; i++) {
            let char = Math.floor(Math.random()
                * str.length + 1);

            pass += str.charAt(char)
        }
        setPassRanDom(pass)
        return pass;
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Form add new</DialogTitle>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className=" grid grid-cols-1  gap-2">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter username" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>New Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter new email " {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            <FormField
                                control={form.control}
                                name="email_personal"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email_personal</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Email personal " {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem className="mb-4">
                                        <FormLabel>Password</FormLabel>
                                        <div className="flex items-center gap-2 relative">
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter password"
                                                    type={isPasswordVisible ? 'text' : 'password'}
                                                    {...field} 
                                                    value={passRanDom} 
                                                    onChange={(e) => {
                                                        setPassRanDom(e.target.value); 
                                                        field.onChange(e.target.value); 
                                                    }}
                                                    readOnly
                                                    disabled={true}
                                                    className="pr-10"
                                                />
                                            </FormControl>

                                          
                                            <span
                                                onClick={togglePasswordVisibility}
                                                className="absolute right-16 text-gray-500 text-xl cursor-pointer"
                                            >
                                                {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                                            </span>

                                            
                                            <FormControl className="cursor-pointer" onClick={generatePass}>
                                                <span className="text-2xl text-yellow-500">
                                                    <SiConvertio />
                                                </span>
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /> */}

                            <div className="flex flex-col relative mb-4">
                                <label htmlFor="pass" className="mb-2 text-gray-700 font-semibold text-base">
                                    Password
                                </label>
                                <div className="relative">
                                    {/* Password input field */}
                                    <input
                                        disabled={true}
                                        type={isPasswordVisible ? 'text' : 'password'}
                                        value={passRanDom}
                                        readOnly
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 pr-12 text-sm"
                                        id="pass"
                                        placeholder="Enter password"
                                    />

                                    {/* Visibility toggle icon */}
                                    <span
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-16 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl cursor-pointer"
                                    >
                                        {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                                    </span>

                                    {/* Generate password icon */}
                                    <button
                                        type="button"
                                        onClick={generatePass}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-yellow-500 text-2xl cursor-pointer"
                                    >
                                        <SiConvertio />
                                    </button>
                                </div>
                            </div>


                            <Button type="submit" disabled={isLoading}>
                                {!isLoading ? "Submit " : <Loader2 className="animate-spin" />}
                            </Button>
                        </form>

                    </Form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}


export default ModalAddEmployees