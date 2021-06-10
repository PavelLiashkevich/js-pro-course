import React, { useState } from 'react';
import { Input } from '../Input';
import { emojies } from '../../emojiList';
import { EmojiList } from '../EmojiList';
import './search.css';

export const Search = () => {
	const [arrayEmojies, setArrayEmojies] = useState(emojies);

	const mySearch = value => {
		const arrayEmojies = emojies.filter(emoji => {
			return (
				emoji.keywords.toLowerCase().includes(value.toLowerCase()) ||
				emoji.title.toLowerCase().includes(value.toLowerCase())
			);
		});
		setArrayEmojies(arrayEmojies);
	};
	return (
		<div className='search'>
			<div className='input-container'>
				<Input
					onChange={elem => {
						mySearch(elem.target.value);
					}}
				/>
			</div>
			<EmojiList array={arrayEmojies} />
		</div>
	);
};
