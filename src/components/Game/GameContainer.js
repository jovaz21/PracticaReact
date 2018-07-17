import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Game from './Game';
import { StatusSetAction, GameSetAction } from '../../store';

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

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextPlayer: props.nextPlayer,
      squares: props.squares,
    };
  }

  // On Select
  onSelect(ix) {
    const prevState = this.state;
    const { squares } = prevState;

    /* check */
    if (isGameFinished(getWinner(squares), squares)) {
      return;
    }

    /* set */
    const { doGameSetAction, doStatusSetAction } = this.props;

    /* Set Game */
    const newSquares = squares.slice();
    newSquares[ix] = prevState.nextPlayer;
    doGameSetAction({
      squares: newSquares,
    });

    /* Set Status */
    const nextPlayer = prevState.nextPlayer === 'X' ? 'O' : 'X';
    const curWinner = getWinner(newSquares);
    const isFinished = isGameFinished(curWinner, newSquares);
    doStatusSetAction({
      nextPlayer,
      curWinner,
      isFinished,
    });
  }

  static getDerivedStateFromProps({ nextPlayer, squares }) {
    return {
      nextPlayer,
      squares,
    };
  }

  render() {
    const { squares } = this.state;
    return <Game squares={squares} onSelect={ix => this.onSelect(ix)} />;
  }
}
GameContainer.defaultProps = {
  ...Game.defaultProps,
  onSelect: () => {},
};
GameContainer.propTypes = {
  ...Game.propTypes,
  onSelect: PropTypes.func,
};

const mapStateToProps = state => ({
  nextPlayer: state.status.nextPlayer,
  squares: state.game.squares,
});
const mapDispatchToProps = {
  doStatusSetAction: StatusSetAction,
  doGameSetAction: GameSetAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameContainer);
