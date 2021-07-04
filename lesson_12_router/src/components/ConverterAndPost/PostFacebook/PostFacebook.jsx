import React, { useState } from "react";
import styled from "styled-components";
import "./postFacebook.css";

export const PostFacebook = ({
  image,
  name,
  postDescription,
  location,
  timeText,
}) => {
  const [count, setCount] = useState(0);
  const onClickLike = () => {
    setCount(count + 1);
  };
  const onClickReply = () => {
    alert("Reply");
  };

  return (
    <Container>
      <Post>
        <div className="image">
          <img className="image_size" src={image} alt="avatar" />
        </div>
        <div className="name">
          <div className="name-style">{name}</div>
          <div className="point">.</div>
          <div className="location">{location}</div>
        </div>
        <Description>{postDescription}</Description>
        <Like>
          <button className="button-all button-one" onClick={onClickLike}>
            Like{count}
          </button>
          <div className="point">.</div>
          <button className="button-all button-two" onClick={onClickReply}>
            Reply
          </button>
          <div className="point">.</div>
          <div className="time-text">{timeText}</div>
        </Like>
      </Post>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Post = styled.div`
  border: 1px solid gray;
  width: 700px;
  height: 190px;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

const Description = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 12px;
  font-size: 20px;
`;

const Like = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 40px;
`;
