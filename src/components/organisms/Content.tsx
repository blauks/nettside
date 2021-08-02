import React from "react";
import Contact from "../atoms/Contact";
import List from "../atoms/List";
import Paragraph from "../atoms/Paragraph";
import Title, { FontSize } from "../atoms/Title";
import Work, { WorkContentType } from "../molecules/Work";

type ContentType = {
  title: string;
  text?: string;
  list?: string[];
  work?: WorkContentType[];
};

const Content = ({ title, text, list, work }: ContentType) => {
  const GetContentType = () => {
    if (text) {
      return <Paragraph content={text} />;
    } else if (list) {
      return <List content={list} />;
    } else if (work) {
      return (
        <>
          {work.map((work) => (
            <div className="flex flex-col flex-1" key={work.description}>
              <Work {...work} />
            </div>
          ))}
        </>
      );
    } else {
      return <Contact />;
    }
  };

  return (
    <div>
      <Title content={title} size={FontSize.MEDIUM} />
      {GetContentType()}
    </div>
  );
};

export default Content;
