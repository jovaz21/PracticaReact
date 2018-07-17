import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import FrameLayout from '../layout/FrameLayout';
import { Status, Game, ResetButton } from '../components';
import './App.css';

// Normalize Styles between Browsers
// eslint-disable-next-line
injectGlobal`
    ${normalize()}
    html,
    body {
        width: 100%;
        height: 100%;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
    #root {
        height: 100%;
    }
`;

// App State
const INITIAL_STATE = {
  nextPlayer: 'X',
  squares: Array(9).fill(null),
  isFinished: false,
  curWinner: null,
  scores: { X: 0, O: 0 },
};

// Get Winner
const getWinner = (squares) => {
  let res = null;
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  lines.forEach((line) => {
    const [ix1, ix2, ix3] = line;
    if (squares[ix1] && squares[ix1] === squares[ix2] && squares[ix1] === squares[ix3]) {
      res = squares[ix1];
    }
  });
  return res;
};

// Is Game Finished
const isGameFinished = (winner, squares) => {
  let res = true;

  /* check */
  if (winner != null) {
    return true;
  }

  /* scan */
  squares.forEach((value) => {
    if (value == null) {
      res = false;
    }
  });

  /* done */
  return res;
};

// Main App Component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  // TICTACTOE: ------------------------------------------

  // On Square Selected:
  onSelect(ix) {
    const { squares } = this.state;
    this.setState((prevState) => {
      const newSquares = squares.slice();
      newSquares[ix] = prevState.nextPlayer;
      const nextPlayer = prevState.nextPlayer === 'X' ? 'O' : 'X';
      const curWinner = getWinner(newSquares);
      const isFinished = isGameFinished(curWinner, newSquares);
      return {
        squares: newSquares,
        nextPlayer,
        curWinner,
        isFinished,
      };
    });
  }

  // On Reset Game
  onResetGame() {
    this.setState(INITIAL_STATE);
  }

  //------------------------------------------------------

  // LIFECYCLE: Render View
  render() {
    const {
      nextPlayer, isFinished, curWinner, squares,
    } = this.state;
    return (
      <FrameLayout className="TicTacToe" orientation="vertical">
        <Status
          className="status"
          nextPlayer={nextPlayer}
          isFinished={isFinished}
          curWinner={curWinner}
        />
        <Game className="game" squares={squares} onSelect={ix => this.onSelect(ix)} />
        {isFinished && <ResetButton className="resetButton" onClick={e => this.onResetGame(e)} />}
      </FrameLayout>
    );
  }
}

export default App;
