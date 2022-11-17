import { StylNormal } from "./stylEscenaNormal";
import { StylPink } from "./stylEscenaPink";

export const Escena = ({ showText, id, paintPink, imgsrc }) => {
  const WhatStyl = paintPink === id ? StylPink : StylNormal;

  return (
    <WhatStyl>
      <h4 id={id} path={imgsrc}>
        {showText}
      </h4>
    </WhatStyl>
  );
};
