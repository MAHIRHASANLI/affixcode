import DefaultLayout from "@/default_layout";
import MainSection from "@/sections/main";
import Services from "@/sections/services";
import React from "react";

type Props = {};

const HomeContainer = (props: Props) => {
  return (
    <DefaultLayout>
      <MainSection />
      <Services />
    </DefaultLayout>
  );
};

export default HomeContainer;
