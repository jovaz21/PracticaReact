import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Normalize Styles between Browsers
// eslint-disable-next-line
injectGlobal`
    ${normalize()};
`;

// eslint-disable-next-line
ReactDOM.render(<App defaultPlayer="X" />, document.getElementById('root'));
registerServiceWorker();
