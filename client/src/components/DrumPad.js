import React from 'react';
import A from '../drum-sounds/A-drum.mp3';
import C from '../drum-sounds/C-drum.mp3';
import D from '../drum-sounds/D-drum.mp3';
import E from '../drum-sounds/E-drum.mp3';
import S from '../drum-sounds/S-drum.mp3';
import Q from '../drum-sounds/Q-drum.mp3';
import W from '../drum-sounds/W-drum.mp3';
import X from '../drum-sounds/X-drum.mp3';
import Z from '../drum-sounds/Z-drum.mp3';

const paths = { A, C, D, E, S, Q, W, X, Z };

function DrumPad(props){
    return <span className="drum-pad" id={`${props.pad}-pad`} onClick={props.playClip}>
        <audio src={paths[props.pad]} className="clip" id={props.pad}></audio>
        {props.pad}
    </span>;
}

export default DrumPad;