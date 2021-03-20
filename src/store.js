// making a store shelf for BookStore

import { createStore } from 'redux';
import reducer from './reducers';
// Initial Value or Initial State

const initialState = {};

// Parameters: reducer, initial value
const store = createStore(rootReducer, initialState);




export default store;
