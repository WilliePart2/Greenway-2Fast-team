import React from 'react';

import {JoinBlock} from "./JoinBlock";
import {CarouselList} from "./CarouselList";

export class Slider extends React.Component {
    render() {

        return (
            <div className="slider">
                <JoinBlock/>
                <CarouselList/>
            </div>
        );
    }
}