import { getAllBlogRequests, getByIdBlogRequest } from "@/api/blog_requests";

type Props = {
  params: {
    id: string;
  };
};

export const generateStaticParams = async () => {
  const blogs = await getAllBlogRequests();

  return blogs.map((blog: any) => ({
    id: blog.id.toString(),
  }));
};

const BlogItemPage = async ({ params }: Props) => {
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
