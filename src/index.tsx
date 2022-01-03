import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@elastic/eui/dist/eui_theme_dark.css';
import { EuiProvider } from '@elastic/eui';
import { FlowProvider } from './context/FlowContext';

ReactDOM.render(
  <React.StrictMode>
    <EuiProvider colorMode='dark'>
      <FlowProvider>
        <App />
      </FlowProvider>
    </EuiProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
