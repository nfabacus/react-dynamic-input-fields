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
      currentPage: 1,
      numOfPageButtons: 4
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
    const currentPage = this.state.currentPage
    const numOfPageButtons = this.state.numOfPageButtons

    let numOfPageGroups = parseInt(currentPage/numOfPageButtons)
    const rangeModulus = currentPage%numOfPageButtons
    if(rangeModulus === 0) {numOfPageGroups -=1 }
    const start = (numOfPageButtons * numOfPageGroups)+1
    const end = Math.min(start + numOfPageButtons-1, numOfPages)

    console.log("numOfPages: ", numOfPages)
    console.log("numOfPageGroups: ", numOfPageGroups)
    console.log("start: ", start)
    console.log("end: ", end)


    for (let i=start;i<=end; i++) {
        paginationButtons.push(i)
    }
    return (
      <div>
        {(start-1)>1&&(<a onClick={()=>this.setCurrentPage(1)}>1 ...</a>)}
        &nbsp;
        {(start-1)>1&&(<a onClick={()=>this.setCurrentPage(start-1<1?start:start-1)}>Previous</a>)}
        {paginationButtons.map(pageBtn=>
          <button
            key={pageBtn}
            onClick={()=>this.setCurrentPage(pageBtn)}
            className={pageBtn===this.state.currentPage?"active":""}
          >
            Page {pageBtn}
          </button>
        )}
        {(end+1)<numOfPages&&(<a onClick={()=>this.setCurrentPage(end+1>numOfPages?end:end+1)}>Next</a>)}
        &nbsp;
        {(end+1)<numOfPages&&(<a onClick={()=>this.setCurrentPage(numOfPages)}>... {numOfPages}</a>)}
      </div>
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
