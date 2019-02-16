import React from 'react';

import {CarouselList} from "./Carousel/CarouselList";
import {TextBlock} from "./Head/textBlock";

export class Slider extends React.Component {
    render() {

        return (
            <div className="slider">
                <TextBlock center bold maxWidth="700">Заработай свой первый миллион и сядь на машину своей мечты уже в
                    течении первого года!</TextBlock>
                <CarouselList/>
            </div>
        );
    }
}