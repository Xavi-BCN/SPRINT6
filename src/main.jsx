import './styles.css';
import React from 'react';
import { Escena } from './components/escena/Escena'
import ReactDOM from 'react-dom/client';
import { Phrases } from './phrases'


  
const App = () => {
    
    /* let message1 = "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial";
    let message2 = "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.";
    let message3 = "L'heroi va decidir travessar la porta que el portava a casa";
    let message4 = "Mentrestant, altres herois no van tenir tanta sort en la seva elecció ..."; */
    let message = "";

    Phrases.forEach( phrase => {
        message = phrase 
        /* return (
            <div>
              <Escena text={message}/>
            </div>
          ); */
    });
    

    
    return (
      <div>
        <Escena text={ message}/>
      </div>
    );
  }



 ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
) 

export default App;