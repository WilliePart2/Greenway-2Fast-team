import React from 'react';

export class LeftArrow extends React.Component {

    render() {
        return (
            <a
                href="#"
                className="carousel-arrow--left carousel-arrow"
                onClick={this.props.onClick}>
                <span className="angle-left"/>
            </a>
        );
    }
}

