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

    initialPositions[0] = <Rook x={0} y={0} />;
    initialPositions[1] = <Knight x={1} y={0} />;
    initialPositions[2] = <Bishop x={2} y={0} />;
    initialPositions[3] = <King x={3} y={0} />;
    initialPositions[4] = <Queen x={4} y={0} />;
    initialPositions[5] = <Bishop x={5} y={0} />;
    initialPositions[6] = <Knight x={6} y={0} />;
    initialPositions[7] = <Rook x={7} y={0} />;

    initialPositions[8] = <Pawn x={0} y={1} />;
    initialPositions[9] = <Pawn x={1} y={1} />;
    initialPositions[10] = <Pawn x={2} y={1} />;
    initialPositions[11] = <Pawn x={3} y={1} />;
    initialPositions[12] = <Pawn x={4} y={1} />;
    initialPositions[13] = <Pawn x={5} y={1} />;
    initialPositions[14] = <Pawn x={6} y={1} />;
    initialPositions[15] = <Pawn x={7} y={1} />;

    // Black pieces
    initialPositions[63] = <Rook x={0} y={7} isBlackPiece={true} />;
    initialPositions[62] = <Knight x={1} y={7} isBlackPiece={true} />;
    initialPositions[61] = <Bishop x={2} y={7} isBlackPiece={true} />;
    initialPositions[60] = <King x={3} y={7} isBlackPiece={true} />;
    initialPositions[59] = <Queen x={4} y={7} isBlackPiece={true} />;
    initialPositions[58] = <Bishop x={5} y={7} isBlackPiece={true} />;
    initialPositions[57] = <Knight x={6} y={7} isBlackPiece={true} />;
    initialPositions[56] = <Rook x={7} y={7} isBlackPiece={true} />;

    initialPositions[55] = <Pawn x={0} y={6} isBlackPiece={true} />;
    initialPositions[54] = <Pawn x={1} y={6} isBlackPiece={true} />;
    initialPositions[53] = <Pawn x={2} y={6} isBlackPiece={true} />;
    initialPositions[52] = <Pawn x={3} y={6} isBlackPiece={true} />;
    initialPositions[51] = <Pawn x={4} y={6} isBlackPiece={true} />;
    initialPositions[50] = <Pawn x={5} y={6} isBlackPiece={true} />;
    initialPositions[49] = <Pawn x={6} y={6} isBlackPiece={true} />;
    initialPositions[48] = <Pawn x={7} y={6} isBlackPiece={true} />;

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
          display: "flex",
          flexDirection: "column"
        }}
      >
        {[...Array(8)].map((e, row) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexGrow: "1",
            }}
          >
            {[...Array(8)].map((f, column) => (            
              <div                
                key={row * 8 + column}
                className="game-cell"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor:
                    (row + column) % 2 ? "#d0d0d0" : "",
                }}
              >
                {chessPieces[row * 8 + column]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
