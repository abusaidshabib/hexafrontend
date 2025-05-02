import { createBrowserRouter } from "react-router";
import ClientLayout from "../layouts/ClientLayout";
import Login from "../pages/shared/Login";
import Register from "../pages/shared/Register";

const router = createBrowserRouter([
    {
        path: "/",
        Component: ClientLayout,
        children: [
            {
                path: "/",
                element: <h1>Home</h1>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
])
export default router;