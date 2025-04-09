import { getAllBlogRequests, getByIdBlogRequest } from "@/api/blog_requests";
import { notFound } from "next/navigation";

interface BlogItemPageProps {
  params: {
    id: string;
  };
}

const BlogItemPage: React.FC<BlogItemPageProps> = async ({ params }) => {
  const { id } = params;
  const blog = await getByIdBlogRequest(id);

  if (!blog) return notFound();

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

export const generateStaticParams = async () => {
  const blogs = await getAllBlogRequests();

  return blogs.map((blog: any) => ({
    id: blog._id.toString(),
  }));
};
