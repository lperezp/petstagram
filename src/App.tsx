import React from 'react';
import './App.scss';
import Card from './modules/admin/components/card';
import CardProfile from './modules/admin/components/CardProfile';
import History from './modules/admin/components/history';
import NavBar from './modules/admin/components/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <div className='container__page'>
        <div className='container__page__post'>
          <History />
          <Card />
        </div>
        <CardProfile />
      </div>
    </div>
  );
}

export default App;
