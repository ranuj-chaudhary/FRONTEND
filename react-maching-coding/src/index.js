import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { MovieProvider } from './sangam_mukherjee_part2/16.MovieAppWithReducer/context/MovieContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <MovieProvider>
    <App />
  </MovieProvider>
);
