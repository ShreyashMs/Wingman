import React from "react";
import Drawer from "../components/drawer";
import Contents from "../components/contents";

const Home = () => {
  return (
    <div className="flex flex-row h-full w-full overflow-x-hidden">
        <Drawer />
        <Contents />
    </div>
  );
};

export default Home;
