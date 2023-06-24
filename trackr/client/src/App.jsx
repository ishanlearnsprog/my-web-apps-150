import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Accounts from "./pages/Wallet/Accounts/Accounts.jsx";
import Analytics from "./pages/Wallet/Analytics/Analytics.jsx";
import Dashboard from "./pages/Wallet/Dashboard/Dashboard.jsx";
import Landing, {
    // landingLoader 
} from "./pages/Landing/Landing.jsx";
import EmailAuth, {
    // emailAuthLoader 
} from "./pages/Auth/EmailAuth.jsx";
import Records from "./pages/Wallet/Records/Records.jsx";
import Settings from "./pages/Wallet/Settings/Settings.jsx";
import Wallet, {
    // walletLoader 
} from "./pages/Wallet/Wallet.jsx";

import { UserContextProvider } from "./contexts/UserContext.jsx";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Landing></Landing>,
            // loader: landingLoader,
        },
        {
            path: "/auth",
            element: <EmailAuth></EmailAuth>,
            // loader: emailAuthLoader,
        },
        {
            path: "/wallet",
            element: <Wallet></Wallet>,
            // loader: walletLoader,
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
        <UserContextProvider>
            <RouterProvider router={router}></RouterProvider>
        </UserContextProvider>
    )
}

export default App;