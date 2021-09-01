import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Details from './pages/Details';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <nav>
      <Link to="/">Home</Link>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
      </nav> */}
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/details/:id">
        <Details />
      </Route>
      <Route path="/favorites">
        <Favorites />
      </Route>
      <Route path="*">
          <Redirect to="/" />
        </Route>
    </Switch>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
