import './App.css';
import { EmojiList } from './components/EmojiList';
import { Search } from './components/Search';
import { emojies } from './emojiList';

export const Emoji = () => {
	return (
		<div className='App'>
			<div>
				<EmojiList array={emojies} />
			</div>
			<div>
				<Search />
			</div>
		</div>
	);
};
