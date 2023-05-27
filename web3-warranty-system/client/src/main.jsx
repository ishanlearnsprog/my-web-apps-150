import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { UserContextProvider } from "./contexts/UserContext.jsx";
import { PageContextProvider } from './contexts/PageContext.jsx';
import { ProuctContextProvider } from "./contexts/ProductContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UserContextProvider>
            <PageContextProvider>
                <ProuctContextProvider>
                    <App />
                </ProuctContextProvider>
            </PageContextProvider>
        </UserContextProvider>
    </React.StrictMode>,
)
