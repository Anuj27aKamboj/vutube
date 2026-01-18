import React from "react";
import VideoContainerComp from "./VideoContainer";
import CategoriesBar from "./CategoriesBar";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div
      className={`flex-1 right-0 transition-all max-w-[100%] duration-200 ${isMenuOpen ? "pl-60" : "pl-20"
      }`}
    >
      <CategoriesBar />
      <VideoContainerComp />
    </div>
  );
};

export default MainContainer;
