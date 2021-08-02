import React from "react";
import { FontSize } from "./Title";

type ParagraphType = {
  content: string;
};

const Paragraph = ({ content }: ParagraphType) => {
  return <p className={FontSize.SMALL}>{content}</p>;
};

export default Paragraph;
