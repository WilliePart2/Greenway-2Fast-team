import React from 'react';

export class Carousel extends React.Component {
    render() {

        let img;

        if (this.props.count === 0) {
            img = <img src={this.props.image}/>;
        } else {
            img = <img src={this.props.image} style={{
                display: ' none'
            }}/>;
        }

        return (
            <div className="carousel-item--li">
                {img}
            </div>
        );
    }
}