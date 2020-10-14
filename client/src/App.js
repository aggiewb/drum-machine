import React from 'react';
import './App.css';
import Drum from './components/Drum.js';
import Footer from './components/Footer.js';

class App extends React.Component {
  constructor(){
    super();
    this.play = this.play.bind(this);
  }

  componentDidMount(){
    document.addEventListener('keydown', event => this.play(document.getElementById(event.key.toUpperCase())));
  }

  play(element){
    if(!element){
      return;
    }
    const pad = (element.target && element.target.firstChild) || element;
    pad.play();
  }

  drumPads = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

  render(){
    return <main id="drum-machine">
      <h1>Drum Machine</h1>
      <Drum pads={this.drumPads} playClip={this.play}/>
      <Footer />
    </main>;
  }
}

export default App;