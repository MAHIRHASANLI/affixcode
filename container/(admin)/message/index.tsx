import AdminLayout from "@/layouts/admin_layout";
import MessageSection from "@/sections/(admin)/message";
import React from "react";

type Props = {};

const MessageContainer = (props: Props) => {
  return (
    <AdminLayout>
      <MessageSection />
    </AdminLayout>
  );
};

export default MessageContainer;
