import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';
import AuthHome from './components/AuthHome';
import Login from './components/Login';
import './App.css';

const PublicHome = () => (
  <div>
    <h2>Unauthenticated Home</h2>
    <p>This is the public homepage that shows up for unauthenticated users</p>
  </div>
)

const Profile = () => (
  <div>
    <h2>Profile</h2>
  </div>
)

const Logout = () => (
  <div>
    <h2>Logout</h2>
  </div>
)

class App extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <Router basename="/app">
        <div className="App">
          <header>
            <div className="HeaderLeft">
              <Link to="/">MERN App Home</Link>
            </div>
            <div className="HeaderRight">
              <Link to="/profile">Profile</Link>
              &nbsp;&middot;&nbsp;
              { user ? <a href="javascript:;">Logout</a> : <Link to="/login">Login</Link> }
            </div>
          </header>

          <hr/>

          { user ?
              <Route exact path="/" render={props => (<AuthHome user={user} {...props} />)} /> :
              <Route exact path="/" component={PublicHome} />
          }

          <Route path="/profile" component={Profile} />
          <Route path="/login/:network?" component={Login} />
          <Route path="/logout" component={Logout} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, null)(App);
