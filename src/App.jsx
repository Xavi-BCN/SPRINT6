import { Welcome } from "./components/Welcome";
import { Button } from "./components/Button";
import { Phrases } from "./phrases";
import { Escena } from "./components/escena/Escena";
import { useState } from "react";
import './styles/App.css';


const App = () => {
  /* variable position vale 0 y se incrementa o decrementa en funcion del boton */ 
  const [position, setPosition] = useState(0);
  /* variable init vale true y se modifica cuando pulsa boton de la pantalla de bienvenida */ 
  const [init, setInit] = useState(true);
  /* funcion que cambia el estado de init a flase para que no vuelva a mostrar pantalla de bienvenida */ 
  const changeInit = () => setInit(false);

  /* Funcion que decrementa position */
  const movePrevius = () => {
    position > 0 ? setPosition(position - 1) : alert("Ja estàs al principi");
  };
  /* Funcion que incrementa position */
  const moveNext = () => {
    position < 3 ? setPosition(position + 1) : alert("Ja estàs al final");
  };
  /* Si init es true, mostrara pantalla de bienvenida*/
  if (init) {
    return (
      <>
        <Welcome btnStart={changeInit} />
      </>
    );

  } else { 
    /* En caso contrario muestra la historieta*/
    return (
      <div id="image" style={{backgroundImage: `url(./src/assets/${position + 1}.jpg)`}}>
        <Button text="Anterior" manejarClick={movePrevius} />
        <Button text="Següent" manejarClick={moveNext} />
        {/* Se carga los textos del array */}
        {Phrases.map((item, i) => (  
          <Escena
            key={i}
            id={i}
            showText={item.text}
            paintPink={position}
            imgsrc={item.img}
          />
          ))}
        </div>
    );
  }
};
export default App;

