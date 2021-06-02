import React from 'react';
import { Post } from '../Post/Post';

export const PostsList = ({ array }) => {
	function getId() {
		return '_' + Math.random().toString(36).substr(2, 9);
	}
	return (
		<>
			{array.map(post => {
				return <Post key={getId()} title={post.title} body={post.body} />;
			})}
		</>
	);
};
