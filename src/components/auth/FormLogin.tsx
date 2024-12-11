"use client"
import React from "react"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'
import { loginUser } from "@/redux/slices/authSlices"
import { useDispatch } from "react-redux"

const formSchema = z.object({
    email: z.string().email().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    })
})

export function ProfileForm() {
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch();


    const { toast } = useToast()
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)

        const resultAction = await dispatch(loginUser({ ...values }))

        if (loginUser.fulfilled.match(resultAction)) {
            // Handle success (e.g., redirect to dashboard)
            router.push("/dashboard");
        } else {
            // Handle error (e.g., show toast notification)
            const errorMessage = resultAction.payload?.error || "Login failed";
            toast({
                variant: "destructive",
                title: `Error`,
                description: `${errorMessage}`,
            });
        }

        setIsLoading(false);
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className="mt-0">
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="**********" {...field} type="password" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={isLoading}>
                    {!isLoading ? "Submit" : <Loader2 className="animate-spin" />
                    }
                </Button>
            </form>
        </Form>
    )
}
