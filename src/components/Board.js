import React from 'react';
import Square from './Square';
const Board = ({board,handlerSquareClick}) => {

  
  const renderSquare = position =>{

    return (
      <Square value={board[position]} btnClicked={()=>{handlerSquareClick(position)}}/>
    );
  }
  return (
    <div>
      <div className='board'> 
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
      </div>
      <div className='board'>
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
      </div>
      <div className='board'>
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
