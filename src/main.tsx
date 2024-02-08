import React from 'react';
import ReactDOM from 'react-dom/client';
import Popover from './components/Popover/Popover';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Popover>
      <Popover.Button>Toggle popover</Popover.Button>
      <Popover.Content>
        <p>this is popover content shown when button is clicked</p>
      </Popover.Content>
    </Popover>
  </React.StrictMode>
);
