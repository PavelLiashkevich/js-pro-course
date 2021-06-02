import './emojiItem.css';

export const EmojiItem = props => {
	return (
		<div className='emojies'>
			<span className='symbol'>{props.symbol}</span>
			<span className='title'>{props.title}</span>
		</div>
	);
};
