import React from 'react';
import axios from 'axios';
import '../App.css';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', this.state.credentials)
    .then(req => {
      // console.log(req)
      localStorage.setItem("token", req.data.payload);
      this.props.history.push("/protected");
    })
    .catch( err => {
      console.log(err)
    });
  };

  render() {
    return (
      <div className='form'>
        <form onSubmit={this.login}>
          <input
            placeholder='username'
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <br />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;