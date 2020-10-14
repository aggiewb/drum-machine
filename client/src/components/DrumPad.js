import React from 'react';

function DrumPad(props){
    return <span className="drum-pad" id={props.pad}>
        {props.pad}
    </span>;
}

export default DrumPad;