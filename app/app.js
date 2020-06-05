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
  }
})

const App = () => (
  <ApplicationRoutes />
);

render(<App />, document.getElementById('application-root'));
