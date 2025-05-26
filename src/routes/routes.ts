import { createBrowserRouter } from "react-router";
import { AuthLayout, MainLayout } from "../components/layouts";
import { CartPage, HomePage, ProductPage } from "../pages";

const router = createBrowserRouter([
   {
      Component: MainLayout,
      children: [
         { index: true, Component: HomePage },
      ]
   },
   {
      Component: AuthLayout,
      children: [
         { path: "products", Component: ProductPage },
         { path: "carts", Component: CartPage }
      ]
   },
]);

export default router;