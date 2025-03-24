import DefaultLayout from "@/default_layout";
import MainSection from "@/sections/main";
import React from "react";

type Props = {};

const HomeContainer = (props: Props) => {
  return (
    <DefaultLayout>
      <MainSection />
    </DefaultLayout>
  );
};

export default HomeContainer;
