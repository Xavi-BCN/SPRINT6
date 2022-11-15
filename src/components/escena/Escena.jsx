import { StylNormal } from './stylEscenaNormal';
import { StylPink } from './stylEscenaPink';

export const Escena = ({ showText, id, paintPink }) => {
  
  const WhatStyl = paintPink === id? StylPink : StylNormal

  return (
    <WhatStyl>
      <h4 id={id}>{showText}</h4>
    </WhatStyl>
  );
}