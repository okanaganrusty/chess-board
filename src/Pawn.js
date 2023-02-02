import React, { useEffect } from "react";
import { useState } from "react";

import black from "./assets/black_pawn.png";
import white from "./assets/white_pawn.png";

const Pawn = (props) => {
  const { isBlackPiece, x, y } = props;
  const [xPosition, setXPosition] = useState(x);
  const [yPosition, setYPosition] = useState(y);

  return (
    <div>
      <img src={isBlackPiece ? black : white} alt="" />
      x: <pre>{xPosition}</pre>, y: <pre>{yPosition}</pre>
    </div>
  );
};

export default Pawn;
