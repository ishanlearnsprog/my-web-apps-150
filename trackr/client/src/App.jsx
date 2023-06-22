import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { GlobalContextProvider } from "./contexts/GlobalContext.jsx";

import Accounts from "./pages/Wallet/Accounts/Accounts.jsx";
import Analytics from "./pages/Wallet/Analytics/Analytics.jsx";
import Dashboard from "./pages/Wallet/Dashboard/Dashboard.jsx";
import Landing from "./pages/Landing/Landing.jsx";
import Records from "./pages/Wallet/Records/Records.jsx";
import Settings from "./pages/Wallet/Settings/Settings.jsx";
import Wallet from "./pages/Wallet/Wallet.jsx";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/home",
            element: <Landing></Landing>
        },
        {
            path: "/wallet",
            element: <Wallet></Wallet>,
            children: [
                {
                    index: true,
                    element: <Dashboard></Dashboard>
                },
                {
                    path: "/wallet/dashboard",
                    element: <Dashboard></Dashboard>
                },
                {
                    path: "/wallet/accounts",
                    element: <Accounts></Accounts>
                },
                {
                    path: "/wallet/analytics",
                    element: <Analytics></Analytics>
                },
                {
                    path: "/wallet/records",
                    element: <Records></Records>
                },
                {
                    path: "/wallet/settings",
                    element: <Settings></Settings>
                },
            ]
        }
    ])

    return (
        <GlobalContextProvider>
            <RouterProvider router={router}></RouterProvider>
        </GlobalContextProvider>
    )
}

export default App;