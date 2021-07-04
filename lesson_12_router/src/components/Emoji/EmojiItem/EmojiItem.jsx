import "./emojiItem.css";

export const EmojiItem = (props) => {
  return (
    <li className="li">
      {props.symbol}
      {props.title}
    </li>
  );
};
