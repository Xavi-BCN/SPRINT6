import React from 'react';
import ReactDOM from 'react-dom/client';
import { Escena } from './components/escena/Escena';
import { phrases } from './historysPhrases'

function App(){
    
    let props;

    phrases.forEach(phrase => {
       props = <h3>{phrase}</h3>
       return Escena(props);
    });
    
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
) 