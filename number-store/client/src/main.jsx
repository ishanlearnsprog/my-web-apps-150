import React from 'react'
import ReactDOM from 'react-dom/client'

import { NumberStoreContextProvider } from './contexts/NumberStoreContext.jsx';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <NumberStoreContextProvider>
            <App />
        </NumberStoreContextProvider>
    </React.StrictMode>,
)
