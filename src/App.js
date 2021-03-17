import React from 'react';
import { Container } from 'react-bootstrap';
import Game from './Game/Game';

const App = () => {
  return (
    <div id='mainWrapper'>
      <Container
        style={{
          padding: '10px',
          border: 'solid black 3px',
          margin: '10px auto 0px auto',
          backgroundColor: '#add8e6'
        }}
      >
        <h1 style={{ textAlign: 'center' }}>Tic-Tac-Toe</h1>
      </Container>
      <Game />
    </div>
  );
};

export default App;
