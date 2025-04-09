import { getAllBlogRequests, getByIdBlogRequest } from "@/api/blog_requests";
import { notFound } from "next/navigation";

// ❗ 'Props' type-i əlavə edirik, amma FC istifadə etmirik
type Props = {
  params: {
    id: any;
  };
};

// ✅ Static params üçün - bütün id-ləri gətiririk
export const generateStaticParams = async () => {
  const blogs = await getAllBlogRequests();

  return blogs.map((blog: any) => ({
    id: blog.id.toString(),
  }));
};

// ✅ Async page komponenti (FC istifadə etmirik!)
const BlogItemPage = async ({ params }: Props) => {
  const { id } = params;
  const blog = await getByIdBlogRequest(id);

  // Not Found səhifəsi üçün
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
