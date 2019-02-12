import React from 'react';

import mercedes1 from '../img/Carousel/mercedes1.jpg';
import mercedes2 from '../img/Carousel/mercedes2.jpg';
import mercedes3 from '../img/Carousel/mercedes3.jpg';
import mercedes4 from '../img/Carousel/mercedes4.jpg';
import mercedes5 from '../img/Carousel/mercedes5.jpg';

import {RightArrow} from './RightArrow';
import {LeftArrow} from './LeftArrow';
import {Carousel} from "./Carousel";

export class CarouselList extends React.Component {
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

    render() {
        let count = 0;

        return (
            <div className="carousel-list-container" id="carousel">
                <LeftArrow/>
                <div className="carousel-list-container--ul">
                    {
                        this.state.images.map((image, i) => (
                            <Carousel key={i} image={image} count={count++}/>
                        ))
                    }
                </div>
                <RightArrow/>
            </div>
        );
    }

}