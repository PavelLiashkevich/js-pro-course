import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { ACTIONS } from "../../redux/constants";
import { useSelector } from "react-redux";

export const User = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.postsReducer.user);

  useEffect(() => {
    console.log("POST", params);
    dispatch({
      type: ACTIONS.GET_USER,
      id: params.id,
    });
  }, []);
  console.log(user);
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <div>{user.username}</div>
    </div>
  );
};
