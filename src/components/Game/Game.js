import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FrameLayout from '../../layout/FrameLayout';

// Styled Squares
const Square = styled.button`
  background-color: #222;
  color: white;
  width: 20vh;
  height: 20vh;
  font-size: 15vh;
  border: 4px solid #999;
  outline-width: 0;
`;
const squareComponents = [
  Square.extend`
    border-top-width: 0;
    border-left-width: 0;
  `,
  Square.extend`
    border-top-width: 0;
  `,
  Square.extend`
    border-top-width: 0;
    border-right-width: 0;
  `,
  Square.extend`
    border-left-width: 0;
  `,
  Square,
  Square.extend`
    border-right-width: 0;
  `,
  Square.extend`
    border-bottom-width: 0;
    border-left-width: 0;
  `,
  Square.extend`
    border-bottom-width: 0;
  `,
  Square.extend`
    border-bottom-width: 0;
    border-right-width: 0;
  `,
];

// Constants
const EMPTY_SQUARE_VALUE = '\u00A0';

// Game
class Game extends Component {
  // On Click
  onClick(e) {
    if (e.target.childNodes[0].data !== EMPTY_SQUARE_VALUE) {
      return;
    }
    const { onSelect } = this.props;
    onSelect(parseInt(e.target.value, 10));
  }

  // Render Square
  renderSquare(i, SpecificSquare) {
    const { squares } = this.props;
    const SquareInstance = SpecificSquare || Square;
    return (
      <SquareInstance key={i} className={squares[i]} value={i} onClick={e => this.onClick(e)}>
        {squares[i] ? squares[i] : EMPTY_SQUARE_VALUE}
      </SquareInstance>
    );
  }

  // View Render
  render() {
    return (
      <FrameLayout className="squares" orientation="vertical">
        <div keyval="row-1" className="game-row">
          {[0, 1, 2].map(v => this.renderSquare(v, squareComponents[v]))}
        </div>
        <div keyval="row-2" className="game-row">
          {[3, 4, 5].map(v => this.renderSquare(v, squareComponents[v]))}
        </div>
        <div keyval="row-3" className="game-row">
          {[6, 7, 8].map(v => this.renderSquare(v, squareComponents[v]))}
        </div>
      </FrameLayout>
    );
  }
}
Game.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};
export default Game;
