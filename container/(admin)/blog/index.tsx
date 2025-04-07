import AdminLayout from "@/layouts/admin_layout";
import BlogSection from "@/sections/(admin)/blog";
import React from "react";

type Props = {};

const BlogContainer = (props: Props) => {
  return (
    <AdminLayout>
      <BlogSection />
    </AdminLayout>
  );
};

export default BlogContainer;
