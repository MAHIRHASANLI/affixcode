import AdminLayout from "@/layouts/admin_layout";
import TeamsSection from "@/sections/(admin)/teams";
import React from "react";

type Props = {};

const TeamsContainer = (props: Props) => {
  return (
    <AdminLayout>
      <TeamsSection />
    </AdminLayout>
  );
};

export default TeamsContainer;
