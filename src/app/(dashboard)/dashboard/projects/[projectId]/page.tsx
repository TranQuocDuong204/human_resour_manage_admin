import DashboardDetail from "@/components/dashboard/components/project-detail/DashboardDetail";
import React from "react";

const ProjectDetail = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const slug = (await params).projectId;
  return (
    <div className="m-2">
      <DashboardDetail projectId={slug} />
    </div>
  );
};

export default ProjectDetail;
