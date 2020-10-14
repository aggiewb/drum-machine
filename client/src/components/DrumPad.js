import React from 'react';

function DrumPad(props){
    return <span className="drum-pad" id={props.pad}>
        <audio src={`${props.pad}-drum.mp3`} className="clip" id={props.pad}></audio>
        {props.pad}
    </span>;
}

export default DrumPad;