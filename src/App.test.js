import React from 'react';
import ReactDOM from 'react-dom';
import TurkeyTimer from './components/TurkeyTimer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TurkeyTimer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
