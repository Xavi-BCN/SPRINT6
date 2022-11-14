import '../styles/Button.css'

function Button(props){

  return(
    <button
      onClick={props.manejarClick}>
      {props.children}
    </button>
  );
  
}

export default Button;