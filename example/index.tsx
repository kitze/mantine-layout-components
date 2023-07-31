import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Vertical } from '../src';

const App = () => {
  return (
    <div>
      <Vertical />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
