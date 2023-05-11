import React from 'react'
import ReactDOM from 'react-dom/client'

import { NotesContextProvider } from './contexts/NotesContext';
import { UsersContextProvider } from './contexts/UsersContext';

import App from "./App.jsx";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UsersContextProvider>
            <NotesContextProvider>
                <App></App>
            </NotesContextProvider>
        </UsersContextProvider>
    </React.StrictMode>,
)
