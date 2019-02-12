import React from 'react';

import mercedes1 from '../img/Carousel/mercedes1.jpg';
import mercedes2 from '../img/Carousel/mercedes2.jpg';
import mercedes3 from '../img/Carousel/mercedes3.jpg';
import mercedes4 from '../img/Carousel/mercedes4.jpg';
import mercedes5 from '../img/Carousel/mercedes5.jpg';

import {Carousel} from './Carousel';
import {RightArrow} from './RightArrow';
import {LeftArrow} from './LeftArrow';
import {BlockWelkome} from "./BlockWelkome";

export class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [
                mercedes1,
                mercedes2,
                mercedes3,
                mercedes4,
                mercedes5
            ],
            count: 0,
            translatePx: 0
        }
    }

    goToPrevSlide() {
        if (this.state.count <= 0) {
            return this.state({
                count: this.state.images.length - 1,
                translatePx: 0
            })
        }

        this.setState(prevState => ({
            count: prevState.count - 1,
            translatePx: prevState.translatePx - -(this.slideWidth())
        }))
    }

    goToNextSlide() {
        if (this.state.count === this.state.images.length - 1) {
            return this.setState({
                    count: 0,
                    translatePx: 0
                }
            )
        }

        this.setState(prevState => ({
            count: prevState.count + 1,
            translatePx: prevState.translatePx + -(this.slideWidth())

        }));
    }

    slideWidth() {
        return document.querySelector('.carousel-item').clientWidth
    }


    render() {

        return (
            <div className="slider">
                <BlockWelkome/>

                <div className="slider-wrapper"
                     style={
                         {
                             transform: `translateX(${this.state.translatePx}px)`,
                             transition: 'transform ease-out 0.45s'
                         }
                     }>
                    {
                        this.state.images.map((image, i) => (
                                <Carousel key={i} image={image}/>
                            )
                        )
                    }
                </div>


                <LeftArrow
                    goToPrevSlide={this.goToPrevSlide}
                />
                <RightArrow
                    goToNextSlide={this.goToNextSlide}
                />

            </div>
        );
    }
}