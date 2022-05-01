import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { EvaluationProvider } from './context/Evaluation/EvaluationProvider';
import { LoadingProvider } from './context/Loading/LoadingProvider';
import { SnackbarProvider } from './context/Snackbar/SnackbarProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <LoadingProvider>
      <SnackbarProvider>
        <EvaluationProvider>
          <App />
        </EvaluationProvider>
      </SnackbarProvider>
    </LoadingProvider>
  </React.StrictMode>
)
