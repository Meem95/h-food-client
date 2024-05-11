import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";

const Root = () => {
  return (
    <div>
      <div className="max-w-full  mx-auto sticky top-0 z-10 backdrop-blur-xl bg-[#FFFFE0] dark:bg-gray-900  font-poppins shadow-2xl">
        <Navbar></Navbar>
      
      </div>
      <div className="min-h-[calc(100vh-350px)]">
        <Outlet />
      </div>
      <div className="max-w-full dark:bg-gray-900  mx-auto font-poppins shadow-2xl">
      <Footer></Footer>
      </div>
      
    </div>
  );
};

export default Root;
