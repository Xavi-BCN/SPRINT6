import '../styles/Button.css'

export function Button({ text, isButtonNext, manejarClick }){

  return(
    <button
      onClick={manejarClick}>
      {text}
    </button>  
  );
}