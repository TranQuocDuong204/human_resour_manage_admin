"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import Loader from "../../Loader";
import handleApi from "@/config/handleApi";
const ProfessionalInformationForm = ({
  valueInputEmployee,
  getValueInput,
  isLoading
}: any) => {
  const [valueDepartment, setValueDepartment] = useState([]);

  useEffect(() => {
    async function fetchDataDepartment() {
      const res = await handleApi("/departments/");
      const data = res.data;
      setValueDepartment(data);
    }

    fetchDataDepartment();
  }, []);



  return (
    <div>
      {" "}
      {isLoading ? <Loader/>:  <div className=" grid grid-cols-1  md:grid-cols-2 gap-6 flex-wrap mt-5">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="position">Position</Label>
          <Input
            placeholder="Position"
            type="text"
            name="position"
            defaultValue={valueInputEmployee.position}
            onChange={getValueInput}
          />
        </div>

        <div className="grid w-full gap-1.5">
          <Label htmlFor="dob">Select Employees Types</Label>
          <select
            name="employee_type"
            id="#"
            className=" border-2 border-gray-200 p-1.5 rounded-md"
            defaultValue={valueInputEmployee.employee_type}
            onChange={getValueInput}
          >
            <option value="">----</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Past Time</option>
            <option value="remote">Remote</option>
          </select>
        </div>

        <div className="grid w-full gap-1.5">
          <Label htmlFor="dob">Select Department</Label>
          <select
            name="department_id"
            id="#"
            value={valueInputEmployee?.department_id || ""}
            onChange={getValueInput}
            className=" border-2 border-gray-200 p-1.5 rounded-md"
          >
            <option value="">----</option>
            {valueDepartment &&
              valueDepartment.map((item: any) => (
                <option key={item.id} value={item.id}>
                  {item.name_department}
                </option>
              ))}
          </select>
        </div>

        <div className="grid w-full gap-1.5">
          <Label htmlFor="dob">Working Days</Label>

          <Input
            placeholder="Working Days"
            type="number"
            defaultValue={valueInputEmployee.working_date}
            name="working_date"
            onChange={getValueInput}
          />
        </div>

        <div className="grid w-full gap-1.5">
          <Label htmlFor="dob">Select Office Location</Label>
          <select
            name="office_location"
            id="#"
            className=" border-2 border-gray-200 p-1.5 rounded-md"
            defaultValue={valueInputEmployee.office_location}
            onChange={getValueInput}
          >
            <option value="">----</option>
            <option value="Đà Nẵng">Đà Nẵng</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Tp.Hồ Chí Minh">Tp.Hồ Chí Minh</option>
          </select>
        </div>

        <div className=" grid w-full items-center gap-1.5">
          <Label htmlFor="dob">Select date join</Label>
          <Input
            placeholder="Joining Date"
            type="date"
            name="joining_date"
            defaultValue={valueInputEmployee.joining_date}
            onChange={getValueInput}
          />
        </div>
      </div>}
     
    </div>
  );
};

export default ProfessionalInformationForm;
