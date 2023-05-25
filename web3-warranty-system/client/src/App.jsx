import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";

import Auth from "./pages/Auth.jsx";
import Buyer from "./pages/Buyer.jsx";
import Seller from "./pages/Seller.jsx";
import { useUserContext } from "./contexts/UserContext.jsx";

const App = () => {
    const { user } = useUserContext();

    const router = createBrowserRouter([
        {
            path: "/",
            element: (user.address && user.role ?
                user.role === "buyer" ? <Navigate to="/buyer"></Navigate> :
                    <Navigate to="/seller"></Navigate> :
                <Auth></Auth>)
        },
        {
            path: "/buyer",
            element: (user.address && user.role === "buyer" ? <Buyer></Buyer> : <Navigate to="/"></Navigate>),
        },
        {
            path: "/seller",
            element: (user.address && user.role === "seller" ? <Seller></Seller> : <Navigate to="/"></Navigate>),
        },
    ])

    return (
        <RouterProvider router={router}></RouterProvider>
    )

}

export default App;