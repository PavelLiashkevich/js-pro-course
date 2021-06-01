import { emojies } from '../../emojiList';
import { EmojiItem } from '../EmojiItem/EmojiItem';

export const EmojiList = () => {
	function getID() {
		return '_' + Math.random().toString(36).substr(2, 9);
	}

	return (
		<ul>
			{emojies.map(item => {
				return (
					<EmojiItem
						key={getID()}
						title={item.title}
						symbol={item.symbol}
					></EmojiItem>
				);
			})}
		</ul>
	);
};
