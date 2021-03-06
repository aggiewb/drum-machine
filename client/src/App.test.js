import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Drum from './components/Drum.js';
import DrumPad from './components/DrumPad.js';

//https://jestjs.io/docs/en/expect
//shallow: https://enzymejs.github.io/enzyme/docs/api/shallow.html
//mount: https://enzymejs.github.io/enzyme/docs/api/mount.html

const EXPECTED_DRUM_PADS = {
  Q: 'bwohm', 
  W: 'bwahm', 
  E: 'bwaah', 
  A: 'gong', 
  S: 'goong',
  D: 'gooong', 
  Z: 'goooong', 
  X: 'gooooong', 
  C: 'goooooong'
};
const EXPECTED_DRUM_PADS_KEYS = Object.keys(EXPECTED_DRUM_PADS);
const EXPECTED_PAD = EXPECTED_DRUM_PADS_KEYS[0];
const EXPECTED_SPAN_ID = `${EXPECTED_PAD}-pad`;
document.body.innerHTML = `<p id="display"></p><span id=${EXPECTED_SPAN_ID}></span>`;

it('App deeply renders as a smoke test', () => {
  mount(<App />);
});

it('should render App class child components, and initialize their props', () => {
  const app = shallow(<App />);
  const drum = app.find('Drum');
  const footer = app.find('Footer');

  expect(drum.exists()).toEqual(true);
  expect(drum.prop('playClip')).toBeDefined();
  expect(drum.prop('pads')).toEqual(EXPECTED_DRUM_PADS_KEYS);

  expect(footer.exists()).toEqual(true);
});

it('should render a Drum component with DrumPad elements', () => {
  const drum = shallow(<Drum pads={EXPECTED_DRUM_PADS_KEYS}/>);
  const drumPads = drum.find('DrumPad');

  expect(drumPads).toHaveLength(EXPECTED_DRUM_PADS_KEYS.length);
  
  const pads = [];
  drumPads.forEach(pad => pads.push(pad.prop('pad')));
  
  EXPECTED_DRUM_PADS_KEYS.forEach(key => {
    expect(pads).toContain(key);
  });
});

it('should call playClip on click of span element in DrumPad', () => {
  const playClip = jest.fn();
  const drumPad = shallow(<DrumPad playClip={playClip}/>);
  const span = drumPad.find('span');

  span.simulate('click');
  expect(playClip).toHaveBeenCalled();
});

it('should call method play on a keydown event', () => {
  const eventListeners = {};
  document.addEventListener = (eventName, callback) => {
    eventListeners[eventName] = callback;
  };

  const app = shallow(<App />);
  const spy = jest.spyOn(app.instance(), 'play');
  
  eventListeners.keydown({key: 'q'});

  expect(spy).toHaveBeenCalled();
});

it('should render DrumPad component with span and audio elements', () => {
  const EXPECTED_AUDIO_PATH = `${EXPECTED_PAD}-drum.mp3`;
  
  const drumPad = shallow(<DrumPad key={EXPECTED_PAD} pad={EXPECTED_PAD}/>);
  const span = drumPad.find('span');
  const audio = drumPad.find('audio');

  expect(span.text()).toEqual(EXPECTED_PAD);
  expect(span.prop('id')).toEqual(EXPECTED_SPAN_ID);
  
  expect(audio.prop('id')).toEqual(EXPECTED_PAD);
  expect(audio.prop('src')).toEqual(EXPECTED_AUDIO_PATH);
});

it('should call App class play() method passing in a null value', () => {
  const app = shallow(<App />);
  const play = app.instance().play(null);
  expect(play).toBeUndefined();
});

it('should call App class play() method passing in an event object', () => {
  const app = shallow(<App />);
  const audio = {
    play: jest.fn()
  };
  
  app.instance().play({
    target: {
      id: EXPECTED_SPAN_ID,
      firstChild: audio
    }
  });

  expect(audio.play).toHaveBeenCalled();
});

it('should call App class play() method passing in a DOM element', () => {
  const app = shallow(<App />);
  jest.useFakeTimers();
  
  const audio = jest.fn();
  
  app.instance().play({
    id: EXPECTED_PAD,
    play: audio
  });

  jest.advanceTimersByTime(100);

  expect(audio).toHaveBeenCalled();
});