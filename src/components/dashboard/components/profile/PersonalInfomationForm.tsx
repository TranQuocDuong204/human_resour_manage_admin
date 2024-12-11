"use client";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const PersonalInfomationForm = ({
  valueInputEmployee,
  getValueInput,
  handleGetImg,
}: any) => {
  return (
    <div className=" grid grid-cols-1  md:grid-cols-2 gap-6 flex-wrap mt-5">
      <div className=" flex flex-col  items-center gap-4">
        <Avatar className="w-20 h-20">
          <AvatarImage src={valueInputEmployee?.avatar} alt="Avatar" />
          <AvatarFallback>Avatar</AvatarFallback>
        </Avatar>
        <Input
          id="picture"
          type="file"
          className="w-full max-w-xs"
          onChange={handleGetImg}
        />
      </div>
      <div className=" space-y-4">
        <div className=" grid w-full items-center gap-1.5">
          <Label htmlFor="email">Phone Number</Label>
          <Input
            placeholder="Phone Number"
            type="number"
            name="phone_number"
            value={valueInputEmployee.phone_number}
            onChange={getValueInput}
          />
        </div>

        <div className=" grid w-full items-center gap-1.5">
          <Label htmlFor="dob">Date of Birth</Label>
          <Input
            placeholder="Date of Birth"
            type="date"
            name="date_of_birth"
            defaultValue={valueInputEmployee.date_of_birth}
            onChange={getValueInput}
          />
        </div>
      </div>

      <div className=" grid w-full items-center gap-1.5">
        <Label htmlFor="dob">Marital Status</Label>
        <select
          name="marital_status"
          id="#"
          className=" border-2 border-gray-200 p-1.5 rounded-md"
          value={valueInputEmployee.marital_status}
          onChange={getValueInput}
        >
          <option value="">----</option>
          <option value="married">Married</option>
          <option value="single">Single</option>
          <option value="divorced">Divorced</option>
        </select>
      </div>
      <div className=" grid w-full items-center gap-1.5">
        <Label htmlFor="dob">Gender</Label>
        <select
          name="gender"
          id="#"
          className=" border-2 border-gray-200 p-1.5 rounded-md"
          value={valueInputEmployee.gender}
          onChange={getValueInput}
        >
          <option value="">----</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="nationality">Nationality</Label>
        <Input
          placeholder="Nationality"
          type="text"
          name="nationality"
          defaultValue={valueInputEmployee.nationality}
          onChange={getValueInput}
        />
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="address">Address</Label>
        <Input
          placeholder="Address"
          type="text"
          name="address"
          defaultValue={valueInputEmployee.address}
          onChange={getValueInput}
        />
      </div>
    </div>
  );
};

export default PersonalInfomationForm;
