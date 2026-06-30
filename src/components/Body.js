import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;