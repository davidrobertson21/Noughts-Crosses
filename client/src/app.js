import React from 'react';
import ReactDOM from 'react-dom';
import CountryContainer from './containers/NoughtsAndCrossesContainer.jsx';

window.onload = function () {
  ReactDOM.render(
    <CountryContainer />,
    document.getElementById('app')
  );
};
