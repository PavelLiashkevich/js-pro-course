import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from 'react-router-dom';
import { LandingPage } from './components/LandingPage/LandingPage';
import { Clicker } from './components/Clicker/Clicker';
import { Emoji } from './components/Emoji/Emoji';
import { Posts } from './components/Posts/Posts';
import { ConverterAndPost } from './components/ConverterAndPost/ConverterAndPost';

export const CustomRouter = () => {
	return (
		<Router>
			<main>
				<nav>
					<ul>
						<li>
							<NavLink to='/landing-page'>Landing Page</NavLink>
						</li>
						<li>
							<NavLink to='/clicker'>Clicker</NavLink>
						</li>
						<li>
							<NavLink to='/emoji'>Emoji</NavLink>
						</li>
						<li>
							<NavLink to='/posts'>Posts</NavLink>
						</li>
						<li>
							<NavLink to='/converter-and-post'>Converter and Post</NavLink>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route exact path='/landing-page'>
						<LandingPage />
					</Route>
					<Route path='/clicker'>
						<Clicker />
					</Route>
					<Route path='/emoji'>
						<Emoji />
					</Route>
					<Route path='/posts'>
						<Posts />
					</Route>
					<Route path='/converter-and-post'>
						<ConverterAndPost />
					</Route>
				</Switch>
			</main>
		</Router>
	);
};
