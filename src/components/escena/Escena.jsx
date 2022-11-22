import { StylNormal } from "./stylEscenaNormal";
import { StylPink } from "./stylEscenaPink";

export const Escena = ({ showText, id, paintPink }) => {
/* Si el valor de paintpink (es position del padre) es igual al id
  entonces cambia el estilo para que quede en rosita*/
  const WhatStyl = paintPink === id ? StylPink : StylNormal;

  return (
    <WhatStyl>
      <h4 id={id}>
        {showText}
      </h4>
    </WhatStyl>
  );
};
