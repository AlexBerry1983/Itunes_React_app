import React from 'react';
import ReactDOM from 'react-dom';
import MusicChartBox from './container/MusicChartBox'

window.addEventListener('load', function () {
  ReactDOM.render(
    <MusicChartBox />,
    document.getElementById('app')
  );
});
