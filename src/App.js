import React,{useState} from "react";
import Board from './components/Board';
import './styles/Square.style.css';
import {calculateWinner} from './Winner';
const App = () => {

  const [board,setBoard]= useState(Array(9).fill(null));
  console.log(board);
  const [isXNext,setisXNext]= useState(false);
  const winner = calculateWinner(board);
  const message = winner ? `Winner is ${winner}` : `Next player is ${isXNext ? 'X' : 'O'}`;

  const handlerSquareClick =(position)=>{

    if(board[position] || winner){
      return;
    }
    setBoard((prev)=>{
      return prev.map((square,pos)=>{
        if(pos===position){
          return isXNext ? 'X':'O';
        }
        return square;
      });
      
    });
    setisXNext(prev => !prev)
  }
  return(
    <div className='app'>
     <h1 data-text="TIC TAC TOE"><span>TIC TAC TOE</span></h1>
     <h2>{message}</h2>
      <Board board={board} handlerSquareClick={handlerSquareClick} />
    </div>
  );
  };

  export default App;
