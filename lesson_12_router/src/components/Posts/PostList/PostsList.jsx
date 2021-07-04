import React from "react";
import { Post } from "../Post/Post";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { ACTIONS } from "../../../redux/constants";
import { useHistory } from "react-router";

export const PostsList = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.postsReducer.posts);
  const error = useSelector((state) => state.postsReducer.error);

  useEffect(() => {
    dispatch({
      type: ACTIONS.GET_POSTS,
    });
  }, []);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  console.log({ posts });

  return (
    <>
      {posts.map((post) => {
        return (
          <Post
            userId={post.userId}
            key={post.id}
            title={post.title}
            body={post.body}
          />
        );
      })}
    </>
  );
};
