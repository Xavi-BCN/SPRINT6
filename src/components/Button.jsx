import '../styles/Button.css'

export function Button({ text, manejarClick }){
  return(
    <button onClick={manejarClick}>{text}</button>  
  );
}