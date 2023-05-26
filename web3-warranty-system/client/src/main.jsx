import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { UserContextProvider } from "../src/contexts/UserContext.jsx";
import { ProductContextProvider } from './contexts/ProductContect.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UserContextProvider>
            <ProductContextProvider>
                <App />
            </ProductContextProvider>
        </UserContextProvider>
    </React.StrictMode>,
)
