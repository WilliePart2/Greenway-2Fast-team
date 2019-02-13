import React from 'react';

import mercedes1 from '../../img/Carousel/mercedes1.jpg';
import mercedes2 from '../../img/Carousel/mercedes2.jpg';
import mercedes3 from '../../img/Carousel/mercedes3.jpg';
import mercedes4 from '../../img/Carousel/mercedes4.jpg';
import mercedes5 from '../../img/Carousel/mercedes5.jpg';

import {RightArrow} from './RightArrow';
import {LeftArrow} from './LeftArrow';
import {Carousel} from "./Carousel";
import {CarouselIndicator} from "./CarouselIndicator";

export class CarouselList extends React.Component {
    constructor(props) {
        super(props);


        this.goToSlide = this.goToSlide.bind(this);
        this.goToPrevSlide = this.goToPrevSlide.bind(this);
        this.goToNextSlide = this.goToNextSlide.bind(this);

        this.state = {
            activeIndex: 0
        };
        this.slides = [
            mercedes1,
            mercedes2,
            mercedes3,
            mercedes4,
            mercedes5
        ];
    }

    goToSlide(index) {
        this.setState({
            activeIndex: index
        });
    }

    goToPrevSlide(e) {
        e.preventDefault();

        let index = this.state.activeIndex;
        let {slides} = this.props;
        let slidesLenght = slides.length;

        if (index < 1) {
            index = slidesLenght;
        }
        --index;

        this.setState({
            activeIndex: index
        });
    }

    goToNextSlide(e) {
        e.preventDefault();

        let index = this.state.activeIndex;
        let {slides} = this.props;
        let slidesLenght = slides.length - 1;

        if (index === slidesLenght) {
            index = 1;
        }
        ++index;

        this.setState({
            activeIndex: index
        });
    }

    render() {
        return (
            <div className="carousel" id="carousel">
                <LeftArrow onClick={e => this.goToPrevSlide(e)}/>

                <ul className="carousel-slides">
                    {this.slides.map((slide, i) =>
                        <Carousel
                            key={i}
                            index={i}
                            activeIndex={this.state.activeIndex}
                            slide={slide}
                        />
                    )}
                </ul>

                <RightArrow onClick={e => this.goToNextSlide(e)}/>

                <ul className="carousel-indicators">
                    {this.slides.map((slide, i) =>
                        <CarouselIndicator
                            key={i}
                            index={i}
                            activeIndex={this.state.activeIndex}
                            isActive={this.state.activeIndex === i}
                            onClick={e => this.goToSlide(i)}
                        />
                    )}
                </ul>
            </div>
        );
    }

}