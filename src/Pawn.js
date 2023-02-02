import React from "react";

import black from "./assets/black_pawn.png";
import white from "./assets/white_pawn.png";

const Pawn = (props) => {
    const { isBlackPiece } = props;

    return <><img src={isBlackPiece ? black : white} alt="" /></>;
}

export default Pawn;