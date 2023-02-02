import React from "react";

import black from "./assets/black_king.png";
import white from "./assets/white_king.png";

const King = (props) => {
    const { isBlackPiece } = props;

    return <><img src={isBlackPiece ? black : white} alt="" /></>;
}

export default King;