import './App.css';
import { PostsList } from './components/PostList/PostsList';
import { posts } from './Posts';

function App() {
	return (
		<div className='App'>
			<PostsList array={posts} />
		</div>
	);
}

export default App;
