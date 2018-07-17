import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { desaturate } from 'polished';

// Styled Button
const Button = styled.button`
  margin-top: 1em;
  margin-bottom: 0.5em;
  background-color: red;
  color: white;
  height: 1.8em;
  border: 0;
  outline-width: 0;
  font-size: 1.5em;
  font-weight: bold;
  &:hover {
    background: ${() => desaturate(0.4, 'red')};
  }
`;

// Reset Button
const ResetButton = ({ onClick }) => (
  <Button type="button" onClick={onClick}>
    REINICIAR
  </Button>
);
ResetButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ResetButton;
