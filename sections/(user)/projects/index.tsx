import React from "react";

import ProjectsComponent from "@/components/(user)/projects/projects/inex";

type Props = {};

const ProjectsSection = (props: Props) => {
  return (
    <section className="section" id="project">
      <ProjectsComponent />
    </section>
  );
};

export default ProjectsSection;
