/* eslint-disable no-unused-vars */
import React from 'react';

const Square = ({ value }) => {
  return <button className="square">{value}</button>;
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
        <Square />
      </div>
    </>
  );
};

export default Board;
