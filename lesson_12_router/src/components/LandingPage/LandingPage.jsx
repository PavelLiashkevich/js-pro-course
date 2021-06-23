import './App.css';
import Avatar from './components/Avatar';
import Myfullname from './components/Myfullname';
import Description from './components/Description';
import styled from 'styled-components';

export const LandingPage = () => {
	return (
		<div className='App'>
			<div className='container container_two'>
				<MyInformation>
					<Myfullname firstName='Pavel' lastName='Liashkevich' />
					<Description description={info} />
				</MyInformation>
				<div className='image'>
					<Avatar src='Image/image_front_end.png' />
				</div>
			</div>
		</div>
	);
};

const info = `I am studying on the courses on frontend development. My skills are HTML5, CSS3, Figma, JavaScript, Git, started to study React. In the future I want to work as a Front-end developer. I am easy and fast learner, work well in a team and hardworking.`;

const MyInformation = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
