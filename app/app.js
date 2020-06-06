import React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'emotion';
import { ApplicationRoutes } from './routes/AppRoutes';

injectGlobal({
  body: {
    margin: '0',
    backgroundColor: '#eee'
  },
  div: {
    display: 'flex'
  },
  h1: {
    fontSize: '1.5rem'
  },
  h2: {
    fontSize: '1.25rem'
  },
  h3: {
    fontSize: '1rem'
  }
})

const App = () => (
  <ApplicationRoutes />
);

render(<App />, document.getElementById('application-root'));
