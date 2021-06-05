import React, { useState } from 'react';
import './postFacebook.css';

export const PostFacebook = ({
	image,
	name,
	postDescription,
	location,
	timeText,
}) => {
	const [count, setCount] = useState(0);
	const onClickLike = () => {
		setCount(count + 1);
	};
	const onClickReply = () => {
		alert('Reply');
	};

	return (
		<div className='container'>
			<div className='post'>
				<div className='image'>
					<img src={image} alt='avatar' />
				</div>
				<div className='name'>
					<div className='name-style'>{name}</div>
					<div className='point'>.</div>
					<div className='location'>{location}</div>
				</div>
				<div className='description'>{postDescription}</div>
				<div className='like'>
					<button className='button-one' onClick={onClickLike}>
						Like{count}
					</button>
					<div className='point'>.</div>
					<button className='button-two' onClick={onClickReply}>
						Reply
					</button>
					<div className='point'>.</div>
					<div className='time-text'>{timeText}</div>
				</div>
			</div>
		</div>
	);
};
