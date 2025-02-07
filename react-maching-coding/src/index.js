import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { MovieProvider } from './sangam_mukherjee_part2/16.MovieAppWithReducer/context/MovieContext.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ErrorBoundary } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div role="alert">
    <h2>Something went wrong!</h2>
    <p>{error.message}</p>
    <button onClick={resetErrorBoundary}>Try Again</button>
  </div>
);

const BuggyComponent = () => {
  throw new Error('Oops! This is an intentional error.');
};

const SECRET_KEY =
  '828819352471-n4ud9jd7p6jotsut7tgclsk50jjuih86.apps.googleusercontent.com';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={`${SECRET_KEY}`}>
    <MovieProvider>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.reload()}
      >
        <App />
      </ErrorBoundary>
    </MovieProvider>
  </GoogleOAuthProvider>
);
