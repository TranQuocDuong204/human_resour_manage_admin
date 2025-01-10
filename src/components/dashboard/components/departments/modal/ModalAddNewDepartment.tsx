"use client";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import handleApi from "@/config/handleApi";

const formSchema = z.object({
  name_department: z.string().min(2).max(50),
});
interface IModalAddNewDepartment {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setDataNewDepartment: (data: any) => void;
}
const ModalAddNewDepartment = ({
  isOpen,
  setIsOpen,
  setDataNewDepartment,
}: IModalAddNewDepartment) => {
  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name_department: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    const newData = {
      ...data,
      manager_id: null,
      status: "active",
      is_active: true,
    };
    try {
      const res = await handleApi("/departments/", newData, "post");
      const datas = res.data;

      if (datas.data[0]) {
        setIsOpen(false);
        setDataNewDepartment(datas.data[0]);
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
        setIsOpen(false);
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: `Error`,
        description: `${error}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Department</DialogTitle>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" grid grid-cols-1  gap-2"
            >
              <FormField
                control={form.control}
                name="name_department"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name Department</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter name department" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isLoading}>
                {!isLoading ? "Submit " : <Loader2 className="animate-spin" />}
              </Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ModalAddNewDepartment;
