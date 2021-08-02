import React from "react";

export enum FontSize {
  SMALL = "lg:text-lg md:text-base text-sm",
  MEDIUM = "lg:text-3xl md:text-1xl text-xl",
  LARGE = "lg:text-9xl md:text-8xl text-7xl",
}

type TitleType = {
  content: string;
  size: FontSize;
};

const Title = ({ content, size }: TitleType) => {
  return <h1 className={size}>{content}</h1>;
};

export default Title;
