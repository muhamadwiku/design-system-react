import './App.css';
import LandingPage from './components/layout/LandingPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import pages from './pages';

export const MainPages = () => (
  <LandingPage>
    <Switch>
      <Route component={pages.Home} exact path={'/'} />
      <Route component={pages.Blog} exact path={'/blog'} />
      <Route component={pages.AboutUs} exact path={'/about-us'} />
      <Route component={pages.Error404} exact path={'/404-not-found'} />
    </Switch>
  </LandingPage>
);

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={MainPages} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
