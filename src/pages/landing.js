import React from 'react';
import Footer from '../components/footer';
import { Header } from '../components/header';
import { MainSlider } from '../components/mainSlider';

export class Landing extends React.Component {
  render () {
    return (
      <div className="landing-content">
        <Header/>
        <MainSlider/>
        <Footer/>
      </div>
    );
  }
}
