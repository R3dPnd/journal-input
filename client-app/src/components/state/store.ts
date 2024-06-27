import { legacy_createStore, applyMiddleware, Reducer } from 'redux';
import reducers from './reducers/index.';
import { thunk } from 'redux-thunk';

export const store = legacy_createStore(reducers, {}, applyMiddleware(thunk));