import { Welcome} from './components/Welcome'
import { Button } from './components/Button'
import { Phrases } from './phrases'
import { Escena } from './components/escena/Escena'
import { useState } from 'react';

const App = () => {
  const [position, setPosition] = useState(0);
  const [init, setInit] = useState(true);
  const changeInit = () => setInit(false)
  
  const movePrevius = () => {
    position > 0 ? setPosition(position - 1) : alert('Ja estàs al principi');

  };
  const moveNext = () => {
    position < 3 ? setPosition(position + 1) : alert('Ja estàs al final');
  };
  
  if(init){ 
    return (
      <>
      <Welcome btnStart={changeInit} />
      </>
     )
    }else{
      return (
        <>
          <Button text='Anterior' manejarClick={movePrevius} />
          <Button text='Següent'  manejarClick={moveNext} />
          {Phrases.map((item, i) => (
            <Escena key={i} id={i} showText={item.text} paintPink={position} imgsrc={item.img} />
          ))}
        </>
      );

    }
}
export default App;


//<div style={{backgroundImage: url(`{./assets/${imgsrc}}`)}}>

//<document.body style ={{ backgroundImage: url(`imgsrc`) }} ></document.body>
// {document.body.style='backgraound-url'{position + 1}''};
//<Document.body.style.backgroundImage: url(`./assets/{imgsrc}`)>  
