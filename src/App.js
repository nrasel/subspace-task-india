import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Dashboard/Home/Home';
import Transaction from './components/Dashboard/Transaction/Transaction';
import Header from './components/Header/Header';
import Subcription from './components/Dashboard/Subcription/Subcription';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
      <Switch>
          <Route path="/home">
            {/* <Home/> */}
          </Route>
          <Route path="/transaction">
            {/* <Transaction/> */}
          </Route>
          <Route path="/subcription">
          {/* <Subcription/> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
