import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute'

function App() {

  return (
    <Router>
    <div className="App">
      <div className="nav">
        <Link to="/login">Login</Link>
        <h1>Friends List</h1>
        <Link to="/protected">Protected Page</Link>
      </div>
      <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
