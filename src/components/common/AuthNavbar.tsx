import Logo from "../../assets/icons/logo-coloured.png";
import Container from "./Container";
import CartButton from "../../features/products/components/CartButton";
import { NavLink } from "react-router";

const AuthNavbar = () => {
   return (
      <Container className="flex items-center justify-between">
         <NavLink to="/products" className="flex items-center justify-between py-6">
            <img src={Logo} alt="" className="w-full max-w-[100px]" />
         </NavLink>
         <CartButton />
      </Container>
   );
};

export default AuthNavbar;