import styled from 'styled-components';
import './post.css';

export const Post = props => {
	return (
		<UserPost>
			<TitleText>{props.title}</TitleText>
			<BodyText>{props.body}</BodyText>
			<AuthorText>
				<p>
					Author:<br></br>
					<span>Leanne Graham</span>
				</p>
			</AuthorText>
		</UserPost>
	);
};

const UserPost = styled.div`
	width: 230px;
	border: 2px solid #6e6c78;
	border-radius: 8px;
	margin: 1em;
	text-align: center;
`;

const TitleText = styled.p`
	font-size: 22px;
	font-weight: bold;
`;

const BodyText = styled.p`
	font-size: 18px;
`;

const AuthorText = styled.div`
	border: 2px solid #6e6c78;
	border-radius: 6px;
	display: flex;
	justify-content: center;
	margin-top: 20px;
	background-color: darkgray;
`;
