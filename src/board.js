/* eslint-disable no-unused-vars */
import React from 'react';

const Square = () => {
  return <button className="square">1</button>;
};

const Board = () => {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <button className="square">9</button>
      </div>
    </>
  );
};

export default Board;
