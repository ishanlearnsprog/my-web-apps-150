import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import { useUsersContext } from "./hooks/useUsersContext";

import Notes from "./pages/Notes";
import Auth from "./pages/Auth";

const App = () => {
    const { user } = useUsersContext();

    const router = createBrowserRouter([
        {
            path: "/",
            element: user ? <Notes></Notes> : <Navigate to="/auth"></Navigate>,
        },
        {
            path: "/auth",
            element: user ? <Navigate to="/"></Navigate> : <Auth></Auth>,
        },
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default App;