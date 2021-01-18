import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';

function App() {
  return (
    // BEM
    <Router>
      <div className="App">
      <Header/>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/checkout">
            <Checkout/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
