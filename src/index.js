import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';

// Create a redux store
// import { createStore } from 'redux';

// Reducer => Special kind of function (state, action) who has state and action and return a state

// const reducerName = (state, action) => {
//   switch (action.type) {
//     case 'ADD_NUMBER':
//       state = state + action.payload;
//       break;
//     case 'REMOVE_NUMBER':
//       state = state - action.payload;

//       break;
//     default:
//       break;
//   }

//   return state;
// };

// Action: just a JS object which hold 2 kind of keys ( type: value, payload/data: value )

// payload means just a data from reducer

// // make a store
// const store = createStore(reducerName, 5); //! createStore (reducerName, initialValue)

// store.subscribe(() => {
//   console.log('Updated data for store:', store.getState());
// });

// store.dispatch({
//   type: 'ADD_NUMBER', // type should be a string and capital
//   payload: 95, // what action will it do
// });

// store.dispatch({
//   type: 'REMOVE_NUMBER', // type should be a string and capital
//   payload: 20, // what action will it do
// });

ReactDOM.render(<App />, document.getElementById('root'));
