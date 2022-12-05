import React from 'react';
import ReactDOM from 'react-dom/client';
import PasswordApp from './App/PasswordApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PasswordApp password={'password'} onSuccess={() => alert('Success')} />
  </React.StrictMode>
);
