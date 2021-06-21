import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const DATA = [
  { id: 'todo-0', name: '1st Element', completed: true },
  { id: 'todo-1', name: 'Something I should do but I won\'t remember ', completed: false },
  { id: 'todo-2', name: 'Finish the test', completed: false }
];

ReactDOM.render(<App tasks={DATA} />, document.getElementById('root'));
