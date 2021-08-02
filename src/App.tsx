import React from "react";
import "./App.css";
import Title, { FontSize } from "./components/atoms/Title";
import Content from "./components/organisms/Content";
import data from "./MyFirstLocalDatabase/data.json";

function App() {
  return (
    <div className="p-4 App">
      <Title content="Jonathan Brooks" size={FontSize.LARGE} />
      <div className="grid gap-16 lg:grid-cols-3 md:grid-cols-2 justify-evenly">
        <img src="./meg.jpg" alt="Me" className="w-1/2" />
        <Content title="WHO_AM_I?" text={data.info} />
        <Content title="PROGRAMMING_LANGUAGES" list={data.programming} />
        <Content title="TECHNOLOGIES" list={data.technologies} />
        <Content title="WORK_EXPERIENCE" work={data.work} />
      </div>
    </div>
  );
}

export default App;
