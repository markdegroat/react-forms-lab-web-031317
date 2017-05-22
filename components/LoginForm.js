import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
    this.handleUsername = this.handleUsername.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUsername(event){
    this.setState({
      username: event.target.value,
      password: this.state.password
    })
  }

  handlePassword(event){
    this.setState({
      username: this.state.username,
      password: event.target.value
    })
  }

  handleSubmit(event){
    if(this.state.username.length != 0 && this.state.password.length != 0){
      event.preventDefault()
      this.props.onSubmit(this.state)
    }else{
      event.preventDefault()
      alert("Type something in!!!")
    }
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handlePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
