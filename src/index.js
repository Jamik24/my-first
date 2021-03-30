import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Soccer from './Soccer'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
    <Soccer country="Spain" club="Real Madrid" player="Isco"/>
    <Soccer country="Brazil" club="PSG" player="Neymar Jr"/>
    <Soccer country="Egypt" club="Liverpool" player="Mohammed Salah"/>
  </div>, 
  document.querySelector('#root')
);

reportWebVitals();
