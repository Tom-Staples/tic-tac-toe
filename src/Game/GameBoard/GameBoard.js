import React from 'react';

const GameBoard = props => {
  return (
    <table id='gameBoard'>
      <tbody>{props.boardDisplay}</tbody>
    </table>
  );
};

export default GameBoard;
