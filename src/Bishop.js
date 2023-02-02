import React from "react";

import black from "./assets/black_bishop.png";
import white from "./assets/white_bishop.png";

const Bishop = (props) => {
    const { isBlackPiece } = props;

    return <><img src={isBlackPiece ? black : white} alt="" /></>;
}

export default Bishop;