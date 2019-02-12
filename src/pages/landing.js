import React from 'react';
import Footer from '../components/footer';
import {Header} from '../components/header';
import {MainSlider} from '../components/mainSlider';
import {ProposalSection} from '../components/proposapSection';
import {Slider} from '../components/Slider';

export class Landing extends React.Component {
    render() {
        return (
            <div className="landing-content">
                <Header/>
                <MainSlider/>
                <ProposalSection/>
                <Slider/>
                <Footer/>
            </div>
        );
    }
}
