import { getAllBlogRequests, getByIdBlogRequest } from "@/api/blog_requests";
import { notFound } from "next/navigation";

import { Metadata } from "next";

const logo = "/images/logo-web.png";
export const metadata: Metadata = {
  metadataBase: new URL("https://affixcode.az"),
  title: "affixcode | Bloq",
  description:
    "affixcode – Müasir veb saytların və ERP sistemlərinin hazırlanması. Biznesinizi onlayn inkişaf etdirmək üçün peşəkar İT həlləri təqdim edirik.",
  keywords: [
    "veb sayt hazırlanması",
    "ERP sistemləri",
    "mobil tətbiq",
    "web development",
    "AFFIX Code",
    "affix code",
    "affixcode",
    "affix",
  ],
  icons: {
    icon: logo, // logo-ya tam URL əlavə edin
  },

  openGraph: {
    title: "AFFIX Code – Veb Sayt və ERP Sistemlərinin Hazırlanması",
    description:
      "AFFIX Code ilə biznesinizi onlayn inkişaf etdirin. Veb sayt, ERP və mobil tətbiqlərin hazırlanması.",
    url: "https://affixcode.az",
    siteName: "AFFIX Code",
    images: [
      {
        url: logo, // logo-ya tam URL əlavə edin
        width: 1200,
        height: 630,
        alt: "AFFIX Code",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AFFIX Code – Veb Sayt və ERP Sistemləri",
    description:
      "Müasir və peşəkar İT həlləri ilə biznesinizi inkişaf etdirin.",
    images: [logo], // logo-ya tam URL əlavə edin
  },
};

interface BlogItemPageProps {
  params: Promise<{
    id: string;
  }>; // Burada params-ı Promise olaraq təyin edirik
}

const BlogItemPage = async ({ params }: BlogItemPageProps) => {
  const { id } = await params; // params-ı gözləyirik (await ilə)
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
