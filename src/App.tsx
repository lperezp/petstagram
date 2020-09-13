import React from 'react';
import './App.scss';
import CardProfile from './modules/admin/components/CardProfile';
import Footer from './modules/admin/components/Footer';
import NavBar from './modules/admin/components/NavBar';
import History from './modules/admin/components/History';
import Card from './modules/admin/components/Card';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <div className='container__page'>
        <div className='container__page__post'>
          <History />
          <Card />
          <Card />
          <Card />
        </div>
        <div>
          <CardProfile />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
