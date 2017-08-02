import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputMessage: "",
      displayMessage: "",
      inputText:"",

      listLength: 100,
      itemsPerPage: 10,
      currentPage: 1
    }
  }

  focus1=()=>{
    this.textInput1.focus()
  }
  blur1=()=>{
    this.textInput1.blur()
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

  setCurrentPage(selectedPage) {
    this.setState({
      currentPage: selectedPage
    })
  }

  renderPagenationBtns() {
    let paginationButtons = []
    const listLength = this.state.listLength
    const itemsPerPage = this.state.itemsPerPage
    const numOfPages = Math.ceil(listLength/itemsPerPage)
    const {currentPage} = this.state

    if(currentPage-1 ===0 || currentPage-2 ===0 ) {
      for (let i=1;i<=5; i++) {
        console.log(i)
        if(i<=numOfPages) {
          paginationButtons.push(i)
        }
      }
    }
    if(currentPage-2 >=1 ) {
      if(currentPage+1>numOfPages){
        for (let i=(currentPage-4);i!==currentPage+1; i++) {
          console.log("check")
          if(i>=1&&i<=numOfPages) {
            paginationButtons.push(i)
          }
        }
      }
      if(currentPage+1===numOfPages){
        for (let i=(currentPage-3);i!==currentPage+2; i++) {
          console.log(i)
          if(i>=1&&i<=numOfPages) {
            paginationButtons.push(i)
          }
        }
      }
      if(currentPage+2<=numOfPages){
        console.log("current Page: ", currentPage)
        console.log("paginationButtons: ", paginationButtons)
        for (let i=currentPage-2;i!==currentPage+3; i++) {
          if(i>=1&&i<=numOfPages) {
            paginationButtons.push(i)
          }
        }
      }
    }

    return paginationButtons.map(pageBtn=>
      <button key={pageBtn} onClick={()=>this.setCurrentPage(pageBtn)}>Page {pageBtn}</button>
    )
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
          <button onClick={this.blur1}>Click me to blur1!</button>
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

        <div>
          <h3>Pagination Test</h3>
          <h4>
            Number of Pages: {this.state.listLength/this.state.itemsPerPage}
          </h4>
          <h4>
            Current Page: {this.state.currentPage}
          </h4>
          {this.renderPagenationBtns()}

        </div>



      </div>
    );
  }
}

export default App;
