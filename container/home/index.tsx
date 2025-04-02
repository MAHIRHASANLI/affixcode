import DefaultLayout from "@/default_layout";
import BenefitsSection from "@/sections/benefits";
import ContactSection from "@/sections/contact";
import FaqsSection from "@/sections/faqs";
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

      {/* //?? */}
      <ContactSection />
      <FaqsSection />
    </DefaultLayout>
  );
};

export default HomeContainer;
