import { postsReducer } from "../redux/reducers/posts";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { postsSaga } from "./sagas/postsSaga";

const sagaMiddleware = createSagaMiddleware();

const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    postsReducer,
  }),
  composeEnchancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(postsSaga);

//store.getState() - возвращает весь store
//store.dispath(action) - для диспатча экшенов
//store.subscribe() - подписка на изменения стора
