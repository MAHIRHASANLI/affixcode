import DefaultLayout from "@/default_layout";
import MainSection from "@/sections/main";
import ProjectsSection from "@/sections/projects";
import ServicesSection from "@/sections/services";
import React from "react";

type Props = {};

const HomeContainer = (props: Props) => {
  return (
    <DefaultLayout>
      <MainSection />
      <ServicesSection />
      <ProjectsSection />
    </DefaultLayout>
  );
};

export default HomeContainer;
