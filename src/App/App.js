import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import FrameLayout from '../layout/FrameLayout';
import { Status, Game, ResetButton } from '../components';
import { store, persistor } from '../store';

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
    <PersistGate persistor={persistor} loading={null}>
      <FrameLayout className="TicTacToe" orientation="vertical">
        <Status className="status" />
        <Game className="game" />
        <ResetButton className="resetButton" />
      </FrameLayout>
    </PersistGate>
  </StoreProvider>
);

export default App;
