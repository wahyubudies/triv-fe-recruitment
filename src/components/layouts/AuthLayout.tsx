import { Outlet } from "react-router";
import { AuthFooter, AuthNavbar } from "../common";
import { Slide, ToastContainer } from "react-toastify";

const AuthLayout = () => {
   return (
      <>
         <AuthNavbar />
         <Outlet />
         <AuthFooter />
         <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="light"
            transition={Slide}
         />
      </>
   );
};

export default AuthLayout;