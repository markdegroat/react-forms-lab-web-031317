import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };


    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    })

    this.charactersLeft = this.charactersLeft - event.target.value.length
  }

  render() {

    return (
      <div>
        <strong>Remaining Characters:{this.props.maxChars - this.state.value.length}</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </div>
    );
  }
}
