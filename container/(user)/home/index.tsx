import DefaultLayout from "@/default_layout";
import BenefitsSection from "@/sections/(user)/benefits";
import BlogsSection from "@/sections/(user)/blogs";
import ContactSection from "@/sections/(user)/contact";
import FaqsSection from "@/sections/(user)/faqs";
import MainSection from "@/sections/(user)/main";
import OurAdvantagesSection from "@/sections/(user)/our_advantages";
import ProjectsSection from "@/sections/(user)/projects";
import ServicesSection from "@/sections/(user)/services";
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
      <BlogsSection />
      <ContactSection />
      <FaqsSection />
    </DefaultLayout>
  );
};

export default HomeContainer;
