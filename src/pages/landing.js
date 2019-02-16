import React from 'react';
import Footer from '../components/footer';
import {Header} from '../components/Head/header';
import {MainSlider} from '../components/Head/mainSlider';
import {ProposalSection} from '../components/proposap/proposapSection';
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
