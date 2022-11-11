import './styles.css';
import React, { useState } from 'react';
import { Escena } from './components/escena/Escena'
import ReactDOM from 'react-dom/client';
import { Phrases } from './phrases'



const App = () => {

  let message1 = "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial";
  let message2 = "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.";
  let message3 = "L'heroi va decidir travessar la porta que el portava a casa";
  let message4 = "Mentrestant, altres herois no van tenir tanta sort en la seva elecció ...";
  //let [message, detecta ] = useState(null);
 
  

  return (  
    <>
    <Escena showText1 = {message1} showText2 = {message2} showText3 = {message3} showText4 = {message4}/>
    </>
    );
  }
       
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

export default App;