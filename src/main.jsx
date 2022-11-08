import React from 'react';
import ReactDOM from 'react-dom/client';
import { Escena } from './components/escena/Escena';

function App(){
    return Escena();
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
) 