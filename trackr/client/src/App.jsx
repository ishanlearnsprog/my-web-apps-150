import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Accounts from "./components/Accounts";
import Analytics from "./components/Analytics";
import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing";
import Records from "./components/Records";
import Wallet from "./components/Wallet";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/home",
            element: <Landing></Landing>
        },
        {
            path: "/",
            element: <Wallet></Wallet>,
            children: [
                {
                    index: true,
                    element: <Dashboard></Dashboard>
                },
                {
                    path: "/dashboard",
                    element: <Dashboard></Dashboard>
                },
                {
                    path: "/accounts",
                    element: <Accounts></Accounts>
                },
                {
                    path: "/analytics",
                    element: <Analytics></Analytics>
                },
                {
                    path: "/records",
                    element: <Records></Records>
                },
            ]
        }
    ])

    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default App;