import React from 'react';
import './App.css';
import Drum from './components/Drum.js';
import Footer from './components/Footer.js';

class App extends React.Component {
  constructor(){
    super();
    this.play = this.play.bind(this);
    this.displaySoundString = this.displaySoundString.bind(this);
  }

  componentDidMount(){
    document.addEventListener('keydown', event => this.play(document.getElementById(event.key.toUpperCase())));
  }

  displaySoundString(id){
    const display = document.getElementById('display');
    display.textContent = this.drumPads[id];
  }

  play(element){
    if(!element){
      return;
    }
    if(!element.target){
      const span = document.getElementById(`${element.id}-pad`);
      span.classList.add('drum-keydown');
      setTimeout(() => span.classList.remove('drum-keydown'), 100);
    }
    const pad = (element.target && element.target.firstChild) || element;
    const id = (element.target && element.target.id[0]) || element.id;
    this.displaySoundString(id);
    pad.play();
  }

  drumPads = {
    Q: 'bwohm', 
    W: 'bwahm', 
    E: 'bwaah', 
    A: 'doeh', 
    S: 'dooeh',
    D: 'doooeh', 
    Z: 'dooooeh', 
    X: 'doooooeh', 
    C: 'dooooooeh'
  };
  
  render(){
    return <main id="drum-machine">
      <h1>Drum Machine</h1>
      <Drum pads={Object.keys(this.drumPads)} playClip={this.play} />
      <Footer />
    </main>;
  }
}

export default App;