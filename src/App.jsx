import { Button } from './components/Button'
import { Phrases } from './phrases'
import { Escena } from './components/escena/Escena'
import { useState, useEffect } from 'react';


const App = () => {
  const [position, setPosition] = useState(0);
  console.log(position);
  const movePrevius = () => {
    
    if (position > 0) {
      setPosition(position - 1);
      console.log(position);
      
    } else {
      console.log(position);
      alert('Ja estàs al principi');
    }
  };

  const moveNext = () => {
    
    if (position < 3) {
      setPosition(position + 1);
      console.log(position);
      
    } else {
      console.log(position);
      alert('Ja estàs al final');
    }
  };

  return (
    <>
      <Button
        text='Anterior'
        isButtonNex={false}
        manejarClick={movePrevius} />
      <Button
        text='Següent'
        isButtonNex={true}
        manejarClick={moveNext} />

      {Phrases.map((item, i) => (
        <Escena key={i} id={i} showText={item.text} />
      ))}
    </>
  );
}

export default App;