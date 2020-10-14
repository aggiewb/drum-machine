import React from 'react';
import './App.css';
import Drum from './components/Drum.js';

class App extends React.Component {
  constructor(){
    super();
  }

  render(){
    return <main id="drum-machine">
      <h1>Drum Machine</h1>
      <Drum />
    </main>;
  }
}

export default App;