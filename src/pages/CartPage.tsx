import { Container } from "../components/common";
import { CartList } from "../features/carts/components";

const CartPage = () => {
   return (
      <>
         <Container>
            <CartList />
         </Container>
      </>
   );
};

export default CartPage;