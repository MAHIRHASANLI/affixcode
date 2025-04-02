import SliderBlog from "@/components/blogs/blog_slider";
import TitleComponent from "@/utils/title_section";
import React from "react";

type Props = {};

const BlogsSection = (props: Props) => {
  return (
    <section className="section">
      <div>
        <TitleComponent title="Bloqlar" description="" />
      </div>
      <div style={{ marginTop: "40px" }}>
        <SliderBlog />
      </div>
    </section>
  );
};

export default BlogsSection;
