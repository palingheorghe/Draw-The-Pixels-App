import React, { Component } from 'react';
import './App.css';

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
            <div>
              <label>Width:</label>
              <input type="number" />
              <label>Height:</label>
              <input type="number" />
              <button type="button">Submit board</button>
            </div>
            <div>
              <table>
                <tr>
                  <td>dsadsada</td>
                  <td>dsadsada</td>
                  <td>dsadsada</td>
                </tr>
                <tr>
                  <td>dsadsada</td>
                  <td>dsadsada</td>
                  <td>dsadsada</td>
                </tr>
              </table>
            </div>
            <div>
              <button type="button">Save your drawing</button>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
