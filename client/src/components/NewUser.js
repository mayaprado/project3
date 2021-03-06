import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Logo from './Logo';
import Footer from './Footer';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <Logo />
        <h2>Register here:</h2>
        <form class="login" onSubmit={this.handleSubmit}>
          <label>
            Username:
            <p>
              <input
                placeholder="Enter your username"
                type="text"
                name="username"
                onChange={this.handleChange}
                value={this.state.username}
              />
            </p>
          </label>
          <br />
          <label>
            Password:
            <p>
              <input
                placeholder="Enter your password"
                type="password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </p>
          </label>
          <br />
          <button className="homebtn" type="submit" value="Submit">
            Submit
          </button>
        </form>
        <br />
        <h3>
          Already have an account? <Link to="/"> Login here! </Link>{' '}
        </h3>
        <br />
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
