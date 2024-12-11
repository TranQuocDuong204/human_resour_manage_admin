"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { LuBriefcase } from "react-icons/lu";
import { FiFileText } from "react-icons/fi";
import { createClient } from "@/utils/supabase/client";
import { Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { useRouter } from "next/navigation";
import PersonalInfomationForm from "@/components/dashboard/components/profile/PersonalInfomationForm";
import ProfessionalInformationForm from "@/components/dashboard/components/profile/ProfessionalInformationForm";
import DocumentsForm from "@/components/dashboard/components/profile/DocumentsForm";

const schemaInfoEmloyee = z.object({
  phone_number: z.number().positive(),
  avatar: z.string().optional(),
  date_of_birth: z.string().optional(),
  marital_status: z.string().optional(),
  gender: z.string().optional(),
  nationality: z.string().optional(),
  address: z.string().optional(),
  employee_type: z
    .string()
    .min(5, { message: "Employee type must be at least 5 characters long" })
    .optional(),
  working_date: z.number(),
  joining_date: z.string().optional(),
  office_location: z.string().optional(),
  position: z.string().optional(),
  user_id: z.string(),
  department_id: z.string().optional(),
});
const AddEmployeePage = () => {
  const [tabValue, setTabValue] = useState("personal");
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();
  const router = useRouter();
  const [valueInputEmployee, setValueInputEmployee] = useState({
    phone_number: 0,
    avatar: "",
    date_of_birth: "",
    marital_status: "",
    gender: "",
    nationality: "",
    address: "",
    employee_type: "",
    working_date: 0,
    joining_date: "",
    office_location: "",
    position: "",
    user_id: "",
    department_id: "",
  });
  const auth = localStorage.getItem("auth") ?? null;
  const parsedAuth = auth ? JSON.parse(auth) : null;
  useEffect(() => {
    getApiEmployee();
  }, []);

  const nextTab = () => {
    const tabs = ["personal", "professional", "documents"];
    const currentIndex = tabs.indexOf(tabValue);
    if (currentIndex < tabs.length - 1) {
      setTabValue(tabs[currentIndex + 1]);
    }
  };
  const prevTab = () => {
    const tabs = ["personal", "professional", "documents"];
    const currentIndex = tabs.indexOf(tabValue);
    if (currentIndex > 0) {
      setTabValue(tabs[currentIndex - 1]);
    }
  };

  const handleGetImg = async (e: any) => {
    try {
      // Generate a unique ID for the file
      const uid = Math.random().toString(36).substring(2, 15); // You can replace this with a more robust method like UUID

      // Check if the user selected a file
      if (!e.target.files || e.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      // Get the file and file extension
      const file = e.target.files[0];
      const fileExt = file.name.split(".").pop(); // Get the file extension (e.g. jpg, png)

      // Generate the file path
      const filePath = `${uid}-${Date.now()}.${fileExt}`; // Use timestamp to avoid collisions

      // Upload the file to Supabase storage
      const { error: uploadError } = await supabase.storage
        .from("Human Resour Manage") // Your bucket name
        .upload(filePath, file); // Upload the file
      const { data } = supabase.storage
        .from("Human Resour Manage")
        .getPublicUrl(filePath);
      setValueInputEmployee((prev) => {
        return {
          ...prev,
          avatar: data.publicUrl,
        };
      });
      // Handle upload errors
      if (uploadError) {
        throw uploadError;
      }
    } catch (error: any) {
      console.log("Error uploading image:", error.message || error);
    }
  };

  const getValueInput = (e: any) => {
    const { name, value } = e.target;

    setValueInputEmployee((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSave = async () => {
    if (isEdit) {
      alert("Edit employee");
    } else {
      valueInputEmployee.phone_number = Number(valueInputEmployee.phone_number);
      valueInputEmployee.working_date = Number(valueInputEmployee.working_date);
      setIsLoading(true);

      const result = schemaInfoEmloyee.safeParse(valueInputEmployee);
      if (!result.success) {
        const errors = result.error.errors.map((err) => err.message).join(", ");
        toast({
          variant: "destructive",
          title: `Error`,
          description: errors,
        });
        setIsLoading(false);
        return;
      }
      const data = {
        ...valueInputEmployee,
        isActive: true,
        user_id: parsedAuth.response.user_id,
        deparment_id: valueInputEmployee.department_id
          ? valueInputEmployee.department_id
          : null,
      };
      try {
        const res = await fetch("http://127.0.0.1:8000/employees/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const datas = await res.json();
        if (datas.message) {
          toast({
            variant: "default",
            title: `Success`,
            description: `${datas.message}`,
          });
          router.push("/dashboard/employees");
        } else {
          toast({
            variant: "destructive",
            title: `Error`,
            description: `${datas.message}`,
          });
        }
        setIsLoading(false);
      } catch (error) {
        toast({
          variant: "destructive",
          title: `Error`,
          description: `${error}`,
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const getApiEmployee = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/employees/");
      const result = await res.json();
      const dataPersonnal = result.find(
        (i: any) => i.user_id === parsedAuth.response.user_id
      );
      console.log(dataPersonnal);
      if (dataPersonnal) {
        setValueInputEmployee(dataPersonnal);
        setIsEdit(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-3 mx-2 my-2 border-2 border-gray-100 rounded-md  w-full">
      <Tabs value={tabValue} onValueChange={setTabValue} className="w-full">
        <TabsList className="bg-[#FFD700] h-full text-white p-3 grid w-full grid-cols-3">
          <TabsTrigger
            value="personal"
            className="border-none px-1 py-2 flex items-center gap-2"
          >
            <FiUser className="h-4 w-4" />
            <span className="hidden sm:inline"> Personal Information</span>
          </TabsTrigger>
          <TabsTrigger
            value="professional"
            className="border-none py-2 flex items-center gap-2"
          >
            <LuBriefcase className="h-4 w-4" />
            <span className="hidden sm:inline"> Professional Information</span>
          </TabsTrigger>
          <TabsTrigger
            value="documents"
            className="border-none py-2 flex items-center gap-2"
          >
            <FiFileText className="h-4 w-4" />
            <span className="hidden sm:inline">Documents</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="personal">
          <PersonalInfomationForm
            valueInputEmployee={valueInputEmployee}
            getValueInput={getValueInput}
            handleGetImg={handleGetImg}
          />
        </TabsContent>

        <TabsContent value="professional">
          <ProfessionalInformationForm
            valueInputEmployee={valueInputEmployee}
            getValueInput={getValueInput}
          />
        </TabsContent>

        <TabsContent value="documents">
          <DocumentsForm />
        </TabsContent>
      </Tabs>
      <div className=" my-4">
        <div className=" flex justify-between">
          <Button
            variant="outline"
            onClick={prevTab}
            disabled={tabValue === "personal"}
          >
            Previous
          </Button>
          <Button
            onClick={tabValue === "documents" ? () => handleSave() : nextTab}
            disabled={isLoading}
          >
            {tabValue === "documents" ? (isEdit ? "Update" : "Save") : "Next"}{" "}
            {isLoading && <Loader2 className="animate-spin" />}
          </Button>
        </div>{" "}
      </div>
    </div>
  );
};

export default AddEmployeePage;
