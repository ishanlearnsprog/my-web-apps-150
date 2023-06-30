import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";

import Accounts from "./pages/Wallet/Accounts/Accounts.jsx";
import AccountForm from "./pages/Wallet/Accounts/AccountForm/AccountForm.jsx";
import Analytics from "./pages/Wallet/Analytics/Analytics.jsx";
import Dashboard from "./pages/Wallet/Dashboard/Dashboard.jsx";
import Landing from "./pages/Landing/Landing.jsx";
import EmailAuth from "./pages/Auth/EmailAuth.jsx";
import Records from "./pages/Wallet/Records/Records.jsx";
import Settings from "./pages/Wallet/Settings/Settings.jsx";
import Wallet from "./pages/Wallet/Wallet.jsx";

import { getUserContext } from "./contexts/UserContext.jsx";

const App = () => {
    const { user } = getUserContext();

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Landing></Landing>,
        },
        {
            path: "/auth",
            element: <EmailAuth></EmailAuth>,
        },
        {
            path: "/wallet",
            element: () => {
                if (user) {
                    return <Wallet></Wallet>
                } else {
                    return <Navigate to="/auth"></Navigate>
                }
            },
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
                    element: <Accounts></Accounts>,
                },
                {
                    path: "/wallet/accounts/:accountId",
                    element: <AccountForm></AccountForm>,
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
        <RouterProvider router={router}></RouterProvider>
    )
}

export default App;