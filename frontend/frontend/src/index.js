import React from 'react';
import ReactDOM from 'react-dom';
import { TallerApp } from './TallerApp';
import './index.css';

//verificar la variable de entorno
//console.log(process.env);

ReactDOM.render(
   <TallerApp />,
  document.getElementById('root')
);

