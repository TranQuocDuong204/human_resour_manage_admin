"use client";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
const DocumentsForm = () => {
  return (
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
  );
};

export default DocumentsForm;
