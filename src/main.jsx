//import './styles.css';
import React from 'react';
import { useState , useEffect } from 'react';
import { Escena } from './components/escena/Escena'
import ReactDOM from 'react-dom/client';
import { Phrases } from './phrases'
import { StylBotoAnt, StylBotoSeg  } from './components/styledbutton'

const App = () => {
  const [positionMark, setPositionMark] = useState(0)

  const movePrevius = () => {
    setPositionMark(0);


  };

  useEffect(()=>{

  });

  return ( 
        <>
          <StylBotoAnt onClick={()=>movePrevius()}>Anterior</StylBotoAnt>
          <StylBotoSeg>Següent</StylBotoSeg>
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