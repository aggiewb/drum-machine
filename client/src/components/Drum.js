import React from 'react';
import DrumPad from './DrumPad.js'

function Drum(props){
    return <section>
        <div id="drum-pads">
            {props.pads.map(pad => <DrumPad key={pad} pad={pad} playClip={props.playClip}/>)}
        </div>
        <p id="display"></p>
    </section>;
}

export default Drum;