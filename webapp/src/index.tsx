import React from 'react';
import ReactDOM from 'react-dom/client';
import '@app/webapp/src/index.css';
import App from '@app/webapp/src/App';
import reportWebVitals from './reportWebVitals';

import { setAppProvider } from "@app/core/AppProvider"

if (process.env.REACT_APP_USE_MOCK) {
  console.warn("Using Mock Provider")
  let { MockAppProvider } = require("@app/mock/MockAppProvider")
  setAppProvider(new MockAppProvider())
} else {
  throw Error("No default app provider implemented. (Please run the app with REACT_APP_USE_MOCK=true to run in mock mode).");
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
