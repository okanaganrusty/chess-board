import React from "react";

import black from "./assets/black_rook.png";
import white from "./assets/white_rook.png";

const Rook = (props) => {
    const { isBlackPiece } = props;

    return <><img src={isBlackPiece ? black : white} alt="" /></>;
}

export default Rook;