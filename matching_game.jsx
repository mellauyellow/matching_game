import React from 'react';
import ReactDOM from 'react-dom';
import ReactGame from './components/game';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ReactGame />,
    document.getElementById('main')
  );
});
