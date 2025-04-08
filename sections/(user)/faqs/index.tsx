import FaqWrapper from "@/components/(user)/faqs/faqs_wrapper";
import TitleComponent from "@/utils/title_section";
import React from "react";

type Props = {};

const FaqsSection = (props: Props) => {
  return (
    <section className="section">
      <div>
        <div>
          <TitleComponent title="Tez-tez verilən suallar" description="" />
        </div>
        <div>
          <FaqWrapper />
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
