import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }

  checkPoem(str){
    var lines = str.split("\n")
    if(lines.length >= 3){
      var wordsInFirstLine = lines[0].trim().split(" ").length
      console.log("First Line:" + wordsInFirstLine)
      var wordsInSecondLine = lines[1].trim().split(" ").length
      console.log("Second Line:" + wordsInSecondLine)
      var wordsInThirdLine = lines[2].trim().split(" ").length
      console.log("Third Line:" + wordsInThirdLine)
      if(lines.length === 3 && wordsInFirstLine === 5 && wordsInSecondLine === 3 && wordsInThirdLine === 5){
        return true
      }else{
        return false
      }
    }else{
      return false
    }

  }

  handleChange(event){
    this.setState({
      value: event.target.value
    })
    console.log(this.checkPoem(event.target.value))
  }



  render() {
    if(this.checkPoem(this.state.value) === true){
      return(
        <div>
          <textarea rows="3" co ls="60" value = {this.state.value} onChange={this.handleChange}/>
        </div>
      )
    }else{
      return (
        <div>
          <textarea rows="3" cols="60" value = {this.state.value} onChange={this.handleChange}/>
          <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
        </div>
      );
    }

  }
}
