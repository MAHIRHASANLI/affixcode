import DefaultLayout from "@/default_layout";
import BenefitsSection from "@/sections/benefits";
import MainSection from "@/sections/main";
import OurAdvantagesSection from "@/sections/our_advantages";
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
      <BenefitsSection />
      <OurAdvantagesSection />
    </DefaultLayout>
  );
};

export default HomeContainer;
