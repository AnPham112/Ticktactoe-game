import React, { useState } from 'react'
import { calculateWinner } from '../../helpers';
import Board from './Board'
import './GameStyles.css';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board)
  const handleClick = (index) => {
    const boardCopy = [...board];
    if(winner || boardCopy[index]) return
    boardCopy[index] = xIsNext ? 'x' : 'o'
    setBoard(boardCopy)
    setXIsNext((prev) => !prev)
  }
  const handleResetGame = () => {
    setBoard(Array(9).fill(null))
    setXIsNext(true)
  }

  return (
    <>
 <Board 
    cells={board} 
    onClick={handleClick}
    ></Board>
    <div
     style={{display: 'flex', flexDirection: 'column', marginTop: '20px'}}>
      <button style={{backgroundColor: 'blue', color: 'white'}} onClick={handleResetGame}>Reset game</button>
    {winner ? `Winner is ${xIsNext ? 'o': 'x'}` : ''}
     </div>
    
    </>
   
    
  )
}

export default Game