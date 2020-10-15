import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

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