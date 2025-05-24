import { createBrowserRouter } from "react-router";
import { MainLayout } from "../components/layouts";
import { HomePage, ProductPage } from "../pages";

const router = createBrowserRouter([
   {
      Component: MainLayout,
      children: [
         { index: true, Component: HomePage },
         { path: "products", Component: ProductPage }
      ]
   },
]);

export default router;