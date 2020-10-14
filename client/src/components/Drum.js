import React from 'react';
import DrumPad from './DrumPad.js'

function Drum(props){
    return <section id="display">
        {props.pads.map(pad => <DrumPad key={pad} pad={pad} playClip={props.playClip}/>)}
    </section>;
}

export default Drum;