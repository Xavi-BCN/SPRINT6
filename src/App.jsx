import { useState , useEffect } from 'react';
import { Escena } from './components/escena/Escena'
import { Phrases } from './phrases'
import { Button }  from './components/Button'


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
            text='Anterior' manejarClick={movePrevius}></Button>
            <Button
            text='Següent' manejarClick={moveNext}></Button>
            {Phrases.map((item,i) => (
              <Escena key = {i} showText = {item.text} />
            ))}
          </>           
      );
    }

    export default App;