//import React, { useState } from 'react';
//import { Input } from '../Input/Input';
//import { emojies } from '../../emojiList';
//import { EmojiList } from '../EmojiList/EmojiList';

//export const Search = () => {
//	const [arrayEmojies, setArrayEmojies] = useState[''];

//	const mySearch = value => {
//		const arrayEmojies = emojies.filter(emoji => {
//			emoji.keywords
//				.replace(/ /g, '')
//				.toLowerCase()
//				.includes(value.toLowerCase());
//			setArrayEmojies(arrayEmojies);
//		});
//	};
//	return (
//		<div>
//			<Input
//				onChange={elem => {
//					mySearch(elem.target.value);
//				}}
//			/>
//			<EmojiList array={emojies} />
//		</div>
//	);
//};
