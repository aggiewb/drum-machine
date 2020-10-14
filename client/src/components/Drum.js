import React from 'react';
import DrumPad from './DrumPad.js'

function Drum(props){
    return <section id="display">
        {props.pads.map(pad => <DrumPad pad={pad}/>)}
    </section>;
}

export default Drum;