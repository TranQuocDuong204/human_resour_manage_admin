import DepartmentDetailDashboard from "@/components/dashboard/components/department-detail/DepartmentDetailDashboard";

const DepartmentDetail = async ({
  params,
}: {
  params: Promise<{ departmentId: string }>;
}) => {
  const slug = (await params).departmentId;
  return (
    <div className="m-3  overflow-hidden">
      {" "}
      <DepartmentDetailDashboard idDetail={slug} />{" "}
    </div>
  );
};

export default DepartmentDetail;
