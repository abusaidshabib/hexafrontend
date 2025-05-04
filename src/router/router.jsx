import { createBrowserRouter } from "react-router";
import ClientLayout from "../layouts/ClientLayout";
import Login from "../pages/shared/Login";
import Register from "../pages/shared/Register";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        Component: ClientLayout,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    }
])
export default router;