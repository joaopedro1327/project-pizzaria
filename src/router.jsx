import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Delivery from "./pages/Delivery";

const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout/>,
    children: [
        { index: true, element: <Home/> },
        { path: "Menu", element: <Menu/>},
        { path: "Delivery", element: <Delivery/>},
    ]
}])

export default router



