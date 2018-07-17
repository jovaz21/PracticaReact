import React from 'react';
import PropTypes from 'prop-types';

// Status
const Status = ({ curWinner, isFinished, nextPlayer }) => {
  if (curWinner != null) {
    return (
      <p>
        El Vencedor, es &nbsp;
        <span className={curWinner}>
          {curWinner}
        </span>
&nbsp; !!!
      </p>
    );
  }
  if (isFinished) {
    return (
      <p>
Partida Finalizada (¡Empate!)
      </p>
    );
  }
  return (
    <p>
      Siguiente jugador:&nbsp;
      <span className={nextPlayer}>
        {nextPlayer}
      </span>
    </p>
  );
};
Status.defaultProps = {
  curWinner: null,
};
Status.propTypes = {
  nextPlayer: PropTypes.string.isRequired,
  isFinished: PropTypes.bool.isRequired,
  curWinner: PropTypes.string,
};
export default Status;
