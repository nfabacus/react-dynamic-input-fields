import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputMessage: "",
      displayMessage: "",
      inputText:""
    }
  }

  focus1=()=>{
    this.textInput1.focus()
  }
  focus2=()=>{
    this.textInput2.focus()
  }

  onInputChange = (e)=>{
    this.setState({
      inputMessage:e.target.value
    })
  }

  handleKeyPress = (e)=>{
    if(e.key==="Enter") {
      this.sendMessage();
    }
  }

  sendMessage = ()=>{
    console.log("Message: ", this.state.inputMessage)
    this.setState({
      displayMessage: this.state.inputMessage
    })
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Input Fields Examples</h2>
        </div>
        <div>
          <br />
          <h3>Type Something, and Hit Enter</h3>
          <input
            value={this.state.inputMessage}
            onChange={this.onInputChange}
            onKeyPress={this.handleKeyPress}
          />
        </div>
        <h3>
          {this.state.displayMessage}
        </h3>

        <div>
          <br />
          <h3>Multiple Input Fields and Enter</h3>
          <br />
          <button onClick={this.focus1}>Click me to focus1!</button>
          <button onClick={this.focus2}>Click me to focus2!</button>
          <br />
          <input className="inputBox"
            ref={(input)=>{ this.textInput1=input; }}
          />
          <input className="inputBox"
            ref={(input)=>{ this.textInput2=input; }}
          />
          <input className="inputBox"
            ref={(input)=>{ this.textInput3=input; }}
          />
          <input className="inputBox"
            ref={(input)=>{ this.textInput4=input; }}
          />
          <input className="inputBox"
            ref={(input)=>{ this.textInput5=input; }}
          />
        </div>



      </div>
    );
  }
}

export default App;
