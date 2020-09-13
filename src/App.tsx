import React from 'react';
import './App.scss';
import Card from './modules/admin/components/card';
import History from './modules/admin/components/history';

function App() {
  return (
    <div className='App'>
      <History />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
