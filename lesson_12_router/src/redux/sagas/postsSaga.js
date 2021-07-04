import { takeEvery, call, put } from "@redux-saga/core/effects";
import { ACTIONS } from "../constants";

function* getPosts() {
  try {
    const res = yield call(() =>
      fetch("https://jsonplaceholder.typicode.com/posts")
    );

    const posts = yield res.json();

    yield put({
      type: ACTIONS.GET_POSTS_SUCCESS,
      posts,
    });
  } catch (e) {
    yield put({
      type: ACTIONS.GET_POSTS_FAILURE,
      error: e.message,
    });
  }
}

function* getOneUser(action) {
  try {
    const res = yield call(() =>
      fetch(`https://jsonplaceholder.typicode.com/users/${action.id}`)
    );

    const user = yield res.json();

    yield put({
      type: ACTIONS.GET_USER_SUCCESS,
      user,
    });
  } catch (e) {
    yield put({
      type: ACTIONS.GET_USER_FAILURE,
      error: e.message,
    });
  }
}

export function* postsSaga() {
  yield takeEvery(ACTIONS.GET_POSTS, getPosts);

  yield takeEvery(ACTIONS.GET_USER, getOneUser);
}
