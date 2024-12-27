import React from "react";

const DepartmentDetail = async ({
  params,
}: {
  params: Promise<{ departmentId: string }>;
}) => {
  const slug = (await params).departmentId;
  return <div>{slug}</div>;
};

export default DepartmentDetail;
