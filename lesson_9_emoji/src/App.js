import './App.css';
import { EmojiList } from './components/EmojiList';
import { Search } from './components/Search';
import { emojies } from './emojiList';

function App() {
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
}

export default App;
