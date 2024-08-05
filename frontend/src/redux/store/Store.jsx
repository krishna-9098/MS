// store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import authReducer from '../reducer/Reducer';
import rootSaga from '../saga/Saga';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  authReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
