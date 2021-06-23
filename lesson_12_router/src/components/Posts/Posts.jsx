import "./Posts.css";
import { PostsList } from "./PostList/PostsList";
import { postsArray } from "./postsArray";

export const Posts = () => {
  return (
    <div className="App">
      <PostsList array={postsArray} />
    </div>
  );
};
