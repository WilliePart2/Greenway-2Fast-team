import React from 'react';

export class Carousel extends React.Component {
    render() {
        return (
            <li className={
                this.props.index === this.props.activeIndex
                    ? "carousel-slide carousel-slide--active"
                    : "carousel-slide"
            }>
                <img className="carousel-slide--content" src={this.props.slide}/>
            </li>
        );
    }
}