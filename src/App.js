import React, { Component } from 'react';
import './App.css';

import SubmitInfo from './components/submit-info';
import DrawingTable from './components/drawing-table';
import SaveDraw from './components/save-draw';

class App extends Component {
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
            <SubmitInfo />
            <DrawingTable />
            <SaveDraw />
          </div>
        </main>
        <p>Made with <span role="img" aria-label="emoji green heart">&#128154;</span> by <a href="http://instagram.com/aling.js">Alin Gheorghe</a></p>
      </div>
    );
  }
}

export default App;
