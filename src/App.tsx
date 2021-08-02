import React from "react";
import Title, { FontSize } from "./components/atoms/Title";
import Content from "./components/organisms/Content";
import data from "./MyFirstLocalDatabase/data.json";

function App() {
  return (
    <div className="flex flex-col min-h-screen p-4 App bg-gradient-to-t from-green-50 to-blue-50">
      <Title content="Jonathan Brooks" size={FontSize.LARGE} />
      <div className="grid self-center gap-10 mt-6 auto-cols-auto md:w-4/5">
        <img src="./meg.jpg" alt="Me" className="w-1/4 justify-self-center" />
        <Content title="WHO_AM_I?" text={data.info} />
        <Content title="PROGRAMMING_LANGUAGES" list={data.programming} />
        <Content title="TECHNOLOGIES" list={data.technologies} />
        <Content title="WORK_EXPERIENCE" work={data.work} />
        <Content title="CONTACT_ME" />
      </div>
    </div>
  );
}

export default App;
