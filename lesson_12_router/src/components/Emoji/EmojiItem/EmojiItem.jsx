import './emojiItem.css';

export const EmojiItem = props => {
	return (
		<li>
			{props.symbol}
			{props.title}
		</li>
	);
};
