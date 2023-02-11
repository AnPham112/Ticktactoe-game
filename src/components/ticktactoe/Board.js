import React from 'react'
import Cell from './Cell'

const Board = ({cells, onClick}) => {

  return (
    <div className='game-board'>
      {cells.map((item, index) => (
        <Cell 
          key={index}
          value={item}
          onClick={() => onClick(index)}
          className={item === 'x' ? 'is-x': item === 'o' ?'is-o' : ''}
        ></Cell>
      ))}
    </div>
  )
}

export default Board