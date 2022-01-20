import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@elastic/eui/dist/eui_theme_dark.css';
import { EuiErrorBoundary, EuiProvider } from '@elastic/eui';
import { FlowProvider } from './context/FlowContext';
import { ToastProvider } from './context/ToastContext';

ReactDOM.render(
  <React.StrictMode>
    <EuiProvider colorMode='dark'>
      <FlowProvider>
        <ToastProvider>
          <EuiErrorBoundary>
            <App />
          </EuiErrorBoundary>
        </ToastProvider>
      </FlowProvider>
    </EuiProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
