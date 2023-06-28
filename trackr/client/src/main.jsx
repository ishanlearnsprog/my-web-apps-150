import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { UserContextProvider } from "./contexts/UserContext.jsx";
import { WalletContextProvider } from "./contexts/WalletContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UserContextProvider>
            <WalletContextProvider>
                <App />
            </WalletContextProvider>
        </UserContextProvider>
    </React.StrictMode>,
)
