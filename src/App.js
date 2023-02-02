import logo from './logo.svg';
import './App.css';

import King from './King';
import Queen from './Queen';
import Bishop from './Bishop';
import Knight from './Knight';
import Rook from './Rook';
import Pawn from './Pawn';

function App() {
  return (
    <div className="App">

      <div style={{
        display: "grid",
        width: "50vw",
        height: "50vh",
        width: "120px",
        height: "120px",
        gridGap: "2px",
        border: "1px solid black",
        gridTemplateColumns: "repeat(8, 1fr)",
        gridTemplateRows: "repeat(8, 1fr)",
       }}>        
        <div className="game-cell"></div>
        <div className="game-cell"></div>        
        <div className="game-cell"></div>
        <div className="game-cell"></div>        
        <div className="game-cell"></div>
        <div className="game-cell"></div>
        <div className="game-cell"></div>
        <div className="game-cell"></div>

        <div className="game-cell"></div>
        <div className="game-cell"></div>        
        <div className="game-cell"></div>
        <div className="game-cell"></div>        
        <div className="game-cell"></div>
        <div className="game-cell"></div>
        <div className="game-cell"></div>
        <div className="game-cell"></div>

        <div className="game-cell"></div>
        <div className="game-cell"></div>        
        <div className="game-cell"></div>
        <div className="game-cell"></div>        
        <div className="game-cell"></div>
        <div className="game-cell"></div>
        <div className="game-cell"></div>
        <div className="game-cell"></div>

        <div className="game-cell"></div>
        <div className="game-cell"></div>        
        <div className="game-cell"></div>
        <div className="game-cell"></div>        
        <div className="game-cell"></div>
        <div className="game-cell"></div>
        <div className="game-cell"></div>
        <div className="game-cell"></div>

        <div className="game-cell"></div>
        <div className="game-cell"></div>        
        <div className="game-cell"></div>
        <div className="game-cell"></div>        
        <div className="game-cell"></div>
        <div className="game-cell"></div>
        <div className="game-cell"></div>
        <div className="game-cell"></div>

        <div className="game-cell"></div>
        <div className="game-cell"></div>        
        <div className="game-cell"></div>
        <div className="game-cell"></div>        
        <div className="game-cell"></div>
        <div className="game-cell"></div>
        <div className="game-cell"></div>
        <div className="game-cell"></div>

        <div className="game-cell"></div>
        <div className="game-cell"></div>        
        <div className="game-cell"></div>
        <div className="game-cell"></div>        
        <div className="game-cell"></div>
        <div className="game-cell"></div>
        <div className="game-cell"></div>
        <div className="game-cell"></div>

        <div className="game-cell"></div>
        <div className="game-cell"></div>        
        <div className="game-cell"></div>
        <div className="game-cell"></div>        
        <div className="game-cell"></div>
        <div className="game-cell"></div>
        <div className="game-cell"></div>
        <div className="game-cell"></div>

       </div>
    </div>
  );
}

export default App;
