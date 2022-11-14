//import './styles.css';
import React from 'react';
import { useState , useEffect } from 'react';
import { Escena } from './components/escena/Escena'
import ReactDOM from 'react-dom/client';
import { Phrases } from './phrases'
import Button from './components/Button'


const App = () => {
  const [position, setPosition] = useState(0)

  const movePrevius = () => {
    if(position > -1){
      setPosition(position - 1);
    }else{
      alert('Ja estàs al principi');
    }
  };

  const moveNext = () => {
    if(position < 4){
      setPosition(position + 1);
      <Escena />

    }else{
      alert('Ja estàs al final');
    }
  };


  return ( 
        <>
          <Button
          manejarClick={movePrevius}>Anterior</Button>
          <Button
          manejarClick={moveNext}>Següent</Button>
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