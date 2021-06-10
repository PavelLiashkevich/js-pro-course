import './App.css';
import { PostsList } from './PostList/PostsList';
import { posts } from './Posts';

export const Posts = () => {
	return (
		<div className='App'>
			<PostsList array={posts} />
		</div>
	);
};
