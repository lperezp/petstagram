import React from 'react';
import './App.scss';
import Card from './modules/admin/components/card';
import History from './modules/admin/components/history';
import NavBar from './modules/admin/components/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <History />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
