import React from 'react';
import '../../styles/components/slider.scss';

export class RightArrow extends React.Component {

    render() {
        return (
            <a
                href="#"
                className="carousel-arrow--right carousel-arrow"
                onClick={this.props.onClick}>
                <span className="angle-right"/>
            </a>
        );
    }
}
