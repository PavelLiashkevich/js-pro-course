import { ACTIONS } from "../constants";

const defaultState = {
  posts: [],
  error: null,
  user: {},
};

export function postsReducer(state, action) {
  switch (action.type) {
    case ACTIONS.GET_POSTS_SUCCESS: {
      return { ...state, posts: action.posts };
    }
    case ACTIONS.GET_POSTS_FAILURE: {
      return { ...state, error: action.error };
    }
    case ACTIONS.GET_USER_SUCCESS: {
      return { ...state, user: action.user };
    }
    case ACTIONS.GET_USER_FAILURE: {
      return { ...state, error: action.error };
    }
    default:
      return defaultState;
  }
}
