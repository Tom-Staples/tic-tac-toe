import React from 'react';
import { Container } from 'react-bootstrap';
import GameBoard from './GameBoard';

const GameBoardContainer = props => {
  const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  //Tracks the score per click
  const identifier = [
    [1, 2, 4],
    [8, 16, 32],
    [64, 128, 256]
  ];

  //Create a nested array with 3 rows & 9 cells with appropriate properties
  let boardDisplay = board.map((row, i) => {
    const cells = row.map((cell, j) => {
      return (
        <td
          id={identifier[i][j]}
          className={`col${j} row${i} ${i === j && 'diagonal0'} ${
            j === 3 - i - 1 && 'diagonal1'
          }`}
          key={j}
          onClick={props.gameWon ? undefined : props.handleCellClick}
        >
          {cell}
        </td>
      );
    });
    return (
      <tr id={`row${i}`} key={i}>
        {cells}
      </tr>
    );
  });

  return (
    <Container>
      <GameBoard
        board={board}
        boardDisplay={boardDisplay}
        handleCellClick={props.handleCellClick}
      />
    </Container>
  );
};

export default GameBoardContainer;
