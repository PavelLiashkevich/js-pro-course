import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Clicker } from "./components/Clicker/Clicker";
import { Emoji } from "./components/Emoji/Emoji";
import { Posts } from "./components/Posts/Posts";
import { ConverterAndPost } from "./components/ConverterAndPost/ConverterAndPost";
import { User } from "./components/User/User";

export const CustomRouter = () => {
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li>
              <NavLink to="/landing-page">Landing Page</NavLink>
            </li>
            <li>
              <NavLink to="/clicker">Clicker</NavLink>
            </li>
            <li>
              <NavLink to="/emoji">Emoji</NavLink>
            </li>
            <li>
              <NavLink to="/posts">Posts</NavLink>
            </li>
            <li>
              <NavLink to="/converter-and-post">Converter and Post</NavLink>
            </li>
            <li>
              <NavLink to="/post">Post</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/landing-page">
            <LandingPage />
          </Route>
          <Route exact path="/clicker">
            <Clicker />
          </Route>
          <Route exact path="/emoji">
            <Emoji />
          </Route>
          <Route exact path="/posts">
            <Posts />
          </Route>
          <Route exact path="/converter-and-post">
            <ConverterAndPost />
          </Route>
          <Route exact path="/users/:id">
            <User />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};
