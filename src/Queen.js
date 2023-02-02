import React from "react";

import black from "./assets/black_queen.png";
import white from "./assets/white_queen.png";

const Queen = (props) => {
    const { isBlackPiece } = props;

    return <><img src={isBlackPiece ? black : white} alt="" /></>;
}

export default Queen;