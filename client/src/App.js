import React from 'react';
import './App.css';
import Drum from './components/Drum.js';
import Footer from './components/Footer.js';

class App extends React.Component {
  constructor(){
    super();
  }

  render(){
    return <main id="drum-machine">
      <h1>Drum Machine</h1>
      <Drum />
      <Footer />
    </main>;
  }
}

export default App;