import React from "react";
import { FontSize } from "./Title";

type ListType = {
  content: string[];
};

const List = ({ content }: ListType) => {
  return (
    <div className="grid grid-flow-row grid-cols-2 gap-1 grid-rows-8">
      {content.map((c) => (
        <p key={c} className={FontSize.SMALL}>
          {c}
        </p>
      ))}
    </div>
  );
};

export default List;
