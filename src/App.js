import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

import King from './King';
import Queen from './Queen';
import Bishop from './Bishop';
import Knight from './Knight';
import Rook from './Rook';
import Pawn from './Pawn';

function App() {
  const [chessPieces, setChessPieces] = useState(new Array(64));

  useEffect(() => {
    setChessPieces((initialPositions) => {
      initialPositions[0] = <Rook />
      initialPositions[1] = <Knight />
      initialPositions[2] = <Bishop />      
      initialPositions[3] = <King />      
      initialPositions[4] = <Queen />            
      initialPositions[5] = <Bishop />      
      initialPositions[6] = <Knight />      
      initialPositions[7] = <Rook />      
    
      initialPositions[8] = <Pawn />
      initialPositions[9] = <Pawn />
      initialPositions[10] = <Pawn />
      initialPositions[11] = <Pawn />
      initialPositions[12] = <Pawn />
      initialPositions[13] = <Pawn />
      initialPositions[14] = <Pawn />
      initialPositions[15] = <Pawn />

      return initialPositions;
    })
  }, [])

  return (
    <div className="App">

      <div style={{
        display: "grid",
        width: "50vw",
        height: "50vh",
        width: "120px",
        height: "120px",
        gridGap: "2px",
        gridTemplateColumns: "repeat(8, 1fr)",
        gridTemplateRows: "repeat(8, 1fr)",
       }}>   
          {[...Array(64)].map((e, i) => <div className="game-cell">{i}</div>)}
       </div>
    </div>
  );
}

export default App;
