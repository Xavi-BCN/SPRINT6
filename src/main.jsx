//import './styles.css';
import React from 'react';
import { Escena } from './components/escena/Escena'
import ReactDOM from 'react-dom/client';
import { Phrases } from './phrases'

const App = () => {

  return ( 
        <>
          {Phrases.map((item,i) => (
            <Escena key={i} showText = {item.text}/>
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