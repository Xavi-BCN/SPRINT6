import {StylNormal} from './stylEscenaNormal';
import {StylPink} from './stylEscenaPink';

export const Escena = ({ showText, id }) => {    

      return (
            <StylNormal>
            <h4  id={id}>{showText}</h4>
            </StylNormal>      
          );
}


