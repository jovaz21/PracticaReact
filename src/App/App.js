import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import FrameLayout from '../layout/FrameLayout';
import { Status, Game, ResetButton } from '../components';
import store from '../store';

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

// Main App Component
const App = () => (
  <StoreProvider store={store}>
    <FrameLayout className="TicTacToe" orientation="vertical">
      <Status className="status" />
      <Game className="game" />
      <ResetButton className="resetButton" />
    </FrameLayout>
  </StoreProvider>
);

export default App;
