import React from 'react';
import { render } from 'react-dom';
import AppLayout from './components/layout/AppLayout';
import { injectGlobal } from 'emotion';

injectGlobal({
  body: {
    margin: '0',
    backgroundColor: '#eee'
  },
  div: {
    display: 'flex'
  }
})

const App = () => (
  <AppLayout />
);

render(<App />, document.getElementById('application-root'));
