import { EmojiItem } from '../EmojiItem';

export const EmojiList = ({ array }) => {
	function getID() {
		return '_' + Math.random().toString(36).substr(2, 9);
	}
	return (
		<ul>
			{array.map(item => {
				return (
					<EmojiItem key={getID()} symbol={item.symbol} title={item.title} />
				);
			})}
		</ul>
	);
};
