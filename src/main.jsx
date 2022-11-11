import './styles.css';
import React, { useState } from 'react';
import { Escena } from './components/escena/Escena'
import ReactDOM from 'react-dom/client';
import { Phrases } from './phrases'

const App = () => {

  return ( 
        <>
          {Phrases.map((item) => (
            <Escena showText = {item}/>
          ))}
        </>           
    );
  }
       
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

export default App;