import React from 'react';
import { Container } from 'react-bootstrap';

const PlayerMessage = props => {
  let message;

  if (props.gameDrawn) {
    message = "It's a draw!";
  } else if (props.gameWon) {
    message = `Player ${props.turn} wins!`;
  } else {
    message = `It's your turn player ${props.turn}!`;
  }

  return (
    <Container style={{ maxWidth: '600px' }}>
      <h3 style={{ float: 'left' }}>Player X score: {props.score.X}</h3>
      <h3 style={{ textAlign: 'right' }}>Player O score: {props.score.O}</h3>
      <h1 style={{ marginTop: '50px' }}>{message}</h1>
    </Container>
  );
};

export default PlayerMessage;
