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

      <Pawn isBlackPiece={true} />      
      <Pawn isBlackPiece={false} />      

      <Knight isBlackPiece={true} />      
      <Knight isBlackPiece={false} />      

      <Rook isBlackPiece={true} />      
      <Rook isBlackPiece={false} />      

      <Bishop isBlackPiece={true} />      
      <Bishop isBlackPiece={false} />      

      <Queen isBlackPiece={true} />      
      <Queen isBlackPiece={false} />      

      <King isBlackPiece={true} />      
      <King isBlackPiece={false} />      

    </div>
  );
}

export default App;
