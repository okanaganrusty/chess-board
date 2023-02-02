import logo from "./logo.svg";
import "./App.css";

import { useState, useEffect } from "react";

import King from "./King";
import Queen from "./Queen";
import Bishop from "./Bishop";
import Knight from "./Knight";
import Rook from "./Rook";
import Pawn from "./Pawn";

function App() {
  const [chessPieces, setChessPieces] = useState(() => {
    const initialPositions = new Array(64);

    initialPositions[0] = <Rook />;
    initialPositions[1] = <Knight />;
    initialPositions[2] = <Bishop />;
    initialPositions[3] = <King />;
    initialPositions[4] = <Queen />;
    initialPositions[5] = <Bishop />;
    initialPositions[6] = <Knight />;
    initialPositions[7] = <Rook />;

    initialPositions[8] = <Pawn />;
    initialPositions[9] = <Pawn />;
    initialPositions[10] = <Pawn />;
    initialPositions[11] = <Pawn />;
    initialPositions[12] = <Pawn />;
    initialPositions[13] = <Pawn />;
    initialPositions[14] = <Pawn />;
    initialPositions[15] = <Pawn />;

    // Black pieces
    initialPositions[63] = <Rook isBlackPiece={true} />;
    initialPositions[62] = <Knight isBlackPiece={true} />;
    initialPositions[61] = <Bishop isBlackPiece={true} />;
    initialPositions[60] = <King isBlackPiece={true} />;
    initialPositions[59] = <Queen isBlackPiece={true} />;
    initialPositions[58] = <Bishop isBlackPiece={true} />;
    initialPositions[57] = <Knight isBlackPiece={true} />;
    initialPositions[56] = <Rook isBlackPiece={true} />;

    initialPositions[55] = <Pawn isBlackPiece={true} />;
    initialPositions[54] = <Pawn isBlackPiece={true} />;
    initialPositions[53] = <Pawn isBlackPiece={true} />;
    initialPositions[52] = <Pawn isBlackPiece={true} />;
    initialPositions[51] = <Pawn isBlackPiece={true} />;
    initialPositions[50] = <Pawn isBlackPiece={true} />;
    initialPositions[49] = <Pawn isBlackPiece={true} />;
    initialPositions[48] = <Pawn isBlackPiece={true} />;

    return initialPositions;
  });

  /*
  useEffect(() => {
    setChessPieces((initialPositions) => {
                  
      return initialPositions;
    });
  }, []);
  */

  return (
    <div className="App">
      <div
        style={{
          display: "grid",
          minWidth: "120px",
          minHeight: "120px",
          width: "120px",
          height: "120px",
          gridGap: "2px",
          gridTemplateColumns: "repeat(8, 1fr)",
          gridTemplateRows: "repeat(8, 1fr)",
        }}
      >
        {[...Array(64)].map((e, i) => (
          <div key={i} className="game-cell">
            {chessPieces[i]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
