import './App.css';
import { EmojiList } from './components/EmojiList/EmojiList';
import { Input } from './components/Input/Input';
//import { Search } from './components/Search/Search';

function App() {
	return (
		<div className='App'>
			<div>
				<EmojiList />
			</div>
			<div>
				<Input />
			</div>
		</div>
	);
}

export default App;
