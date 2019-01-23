import React from 'react';
import { render } from 'react-dom';
import ConnectedLayout from './components/connected-layout/ConnectedLayout';

const App = () => (
  <ConnectedLayout />
);

render(<App />, document.getElementById('application-root'));
