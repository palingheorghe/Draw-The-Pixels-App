import React, { Component } from 'react';
import './App.css';

import SubmitInfo from './components/submit-info';
import DrawingTable from './components/drawing-table';

class App extends Component {
  
  constructor(props){
    super(props);

    this.changeColor = this.changeColor.bind(this); 
    this.changeDraw = this.changeDraw.bind(this);
    this.state = {
      columns: 38,
      rows: 25, 
      color: '#000000'
    };
  }

  changeDraw(x,y) {
    if(x===0) {
      this.setState({
        rows: y
      });
    }else if(y===0) {
      this.setState({
        columns: x
      });
    }
  }

  changeColor(color){
    this.setState({
      color: color
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Pixel Drawing App</h1>
          <h3>Draw anything in pixels....</h3>
        </header>
        <main>
          <p>Draw the things you like by choosing the size of the board and the color of your pencil.</p>
          <div>
            <SubmitInfo changingRows={this.changeDraw} changingColor={this.changeColor}/>
            <DrawingTable columns={ this.state.columns } rows={ this.state.rows } color={this.state.color}/>
          </div>
        </main>
        <p>Made with <span role="img" aria-label="emoji green heart">&#128154; </span> by <a href="http://instagram.com/aling.js">Alin Gheorghe</a></p>
      </div>
    );
  }
}

export default App;
