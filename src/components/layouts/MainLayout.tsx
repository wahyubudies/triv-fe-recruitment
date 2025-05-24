import { Outlet } from "react-router";
import { Footer, Navbar } from "../common";

const MainLayout = () => {
   return (
      <>
         <Navbar />
         <Outlet />
         <Footer />
      </>
   );
};

export default MainLayout;