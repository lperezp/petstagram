import React from 'react';
import Card from '../components/Card';
import CardProfile from '../components/CardProfile';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import History from './../components/History';
import './../../../scss/layout/_home.scss';

const Home: React.FC = () => {
  return (
    <div>
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
};
export default Home;
