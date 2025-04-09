import { getByIdBlogRequest } from "@/api/blog_requests";
import React from "react";

type BlogItemPageProps = {
  params: {
    id: string;
  };
};

const BlogItemPage = async ({ params }: BlogItemPageProps) => {
  const { id } = params;
  const blog = await getByIdBlogRequest(id);
  return (
    <div>
      <h1>{blog.title}</h1>
      <hr />
      <p>{blog.description}</p>
      <p>{blog.date}</p>
    </div>
  );
};

export default BlogItemPage;
