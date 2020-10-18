import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import './fonts/Dancing_Script/DancingScript-SemiBold.ttf';
import 'bootstrap/dist/css/bootstrap.css';

//import './index.css';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  , document.querySelector('#root'));
