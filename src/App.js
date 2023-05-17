import React, { Component } from 'react';
import Palette from './Palette';
import seedsColors from './seedColors';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Palette {...seedsColors[4]} />
      </div>
    );
  }
}
export default App;
