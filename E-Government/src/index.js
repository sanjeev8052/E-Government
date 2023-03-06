import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import store from './store';
import App from './App';
// import './index.css'
import { Provider as AlertProvider, transitions, positions } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const root = ReactDOM.createRoot(document.getElementById('root'));

const option ={
  
  transitions: transitions.SCALE,
  timeout:2000,
  positions: positions.MIDDLE,
}
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider  template={AlertTemplate} {...option}>
        <App />
      </AlertProvider>
    </Provider>
  </React.StrictMode>

);


