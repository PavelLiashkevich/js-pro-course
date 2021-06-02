import './post.css';

export const Post = props => {
	return (
		<div className='user-post'>
			<p className='title-text'>{props.title}</p>
			<p className='body-text'>{props.body}</p>
			<div className='author-text'>
				<p>
					Author:<br></br>
					<span>Leanne Graham</span>
				</p>
			</div>
		</div>
	);
};
