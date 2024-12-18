import React from "react";
import Drawer from "../components/drawer";
import Header from "../components/header";

const Home = () => {
  return (
    <div className="flex flex-row h-full w-full">
      <div className="flxed flex h-full top-0 left-0 z-50">
        <Drawer />
      </div>
      <div className="flex-1 h-full w-full relative">
        <Header />
      </div>
    </div>
  );
};

export default Home;
