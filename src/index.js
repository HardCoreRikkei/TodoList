import React from 'react';
import { createRoot } from 'react-dom/client';
import './Styles/index.css';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import rootReducer from './Reducers';
import App from './App';

const store = createStore(rootReducer)
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
  );
