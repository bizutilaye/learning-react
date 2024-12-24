import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home.jsx";
import Menu, { loader as menuloader } from "./features/menu/Menu.jsx";
import Cart from "./features/cart/Cart.jsx";

import Order from "./features/order/Order.jsx";
import CreateOrder from "./features/order/CreateOrder.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuloader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:Orderid",
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
/* eslint-enable no-unused-vars */
