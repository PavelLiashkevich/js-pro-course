import './App.css';
import { Converter } from './components/Converter/Converter';
import React from 'react';
import { PostFacebook } from './components/PostFacebook/PostFacebook';
import { data } from './data';

export const ConverterAndPost = () => {
	return (
		<div className='App'>
			<h1>Live Currency Converter</h1>
			<Converter />

			<h1>Post Facebook</h1>
			<PostFacebook
				image={data.post.facebookPost.image}
				name={data.post.facebookPost.name}
				postDescription={data.post.facebookPost.postDescription}
				location={data.post.facebookPost.location}
				timeText={data.post.facebookPost.timeText}
			/>
		</div>
	);
};
