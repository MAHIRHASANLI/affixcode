import AdminLayout from "@/layouts/admin_layout";
import ProjectsSection from "@/sections/(admin)/projects";
import React from "react";

type Props = {};

const ProjectsContainer = (props: Props) => {
  return (
    <AdminLayout>
      <ProjectsSection />
    </AdminLayout>
  );
};

export default ProjectsContainer;
