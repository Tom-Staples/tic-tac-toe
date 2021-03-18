import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import GameBoardContainer from './GameBoard/GameBoardContainer';
import PlayerMessage from './PlayerMessage/PlayerMessage';

const Game = e => {
  const [turn, setTurn] = useState('X');
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState({
    X: 0,
    O: 0
  });
  const [gameWon, setGameWon] = useState(false);
  const [gameDrawn, setGameDrawn] = useState(false);

  //Checks if the row / diagonal / col contains the turn indicator
  const contains = (selector, text) => {
    let elements = document.querySelectorAll(selector);
    return [].filter.call(elements, element => {
      return RegExp(text).test(element.textContent);
    });
  };

  //Returns true if the array for a classname contains the same indicator 3 times.
  const condition = e => {
    const memberOf = e.target.className.split(/\s+/);
    const filtMemberOf = memberOf.filter(item => {
      return item !== 'false';
    });
    for (let i = 0; i < filtMemberOf.length; i++) {
      const testClass = '.' + filtMemberOf[i];
      let items = contains('table ' + testClass, turn);
      if (items.length === 3) {
        return true;
      }
    }
    return false;
  };

  //Resets the board and changes the starting player to the opposite
  const resetBoard = func => {
    func(false);
    setTurn(() => {
      if (moves % 2 === 0) {
        return turn === 'X' ? 'O' : 'X';
      } else {
        return turn === 'X' ? 'X' : 'O';
      }
    });
    setMoves(0);
    let cells = document.getElementsByTagName('td');
    [].forEach.call(cells, cell => {
      cell.innerHTML = '';
    });
  };

  //Updates the state based on whether a win / draw / or regular turn has occured
  const handleCellClick = e => {
    if (e.target.innerHTML !== '') {
      return;
    }
    e.target.innerHTML = turn;
    let actMoves = moves + 1;
    setMoves(actMoves);
    if (condition(e)) {
      setGameWon(true);
      setScore({
        ...score,
        [turn]: score[turn] + 1
      });
      setTimeout(resetBoard, 2000, setGameWon);
    } else if (actMoves === 9) {
      setGameDrawn(true);
      setTimeout(resetBoard, 2000, setGameDrawn);
    } else {
      setTurn(turn === 'X' ? 'O' : 'X');
    }
  };

  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <GameBoardContainer handleCellClick={handleCellClick} gameWon={gameWon} />
      <PlayerMessage
        handleCellClick={handleCellClick}
        turn={turn}
        score={score}
        moves={moves}
        gameWon={gameWon}
        gameDrawn={gameDrawn}
      />
    </Container>
  );
};

export default Game;
