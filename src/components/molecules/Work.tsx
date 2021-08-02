import React, { useState } from "react";
import { KeyboardArrowUp, KeyboardArrowDown } from "@material-ui/icons";

export type WorkContentType = {
  company: string;
  title: string;
  period: string;
  description: string;
  imgurl: string;
};

const Work = ({
  company,
  title,
  period,
  description,
  imgurl,
}: WorkContentType) => {
  const [clicked, changeClicked] = useState(false);

  const handleOnClick = () => {
    changeClicked(!clicked);
  };

  return (
    <div
      className="flex p-2 mb-4 shadow-lg cursor-pointer bg-gray-50"
      onClick={handleOnClick}
    >
      <img src={imgurl} alt="Job logo" className="w-12 h-full mr-3" />
      <div>
        <p>
          {title} - {company}
          {clicked ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </p>
        <p className="ml-5 italic">{period}</p>
        {clicked && <div>{description}</div>}
      </div>
    </div>
  );
};

export default Work;
