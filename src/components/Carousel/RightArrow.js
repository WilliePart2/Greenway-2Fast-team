import React from 'react';

export class RightArrow extends React.Component {

    render() {
        return (
            <a
                href="#"
                className="carousel-arrow--right carousel-arrow"
                onClick={this.props.onClick}>
                <span className="fa fa-2x fa-angle-right"/>
            </a>
        );
    }
}
