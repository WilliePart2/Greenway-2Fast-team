import React from 'react';

export class CarouselIndicator extends React.Component {
    render() {
        return (
            <li>
                <a className={
                    this.props.index == this.props.activeIndex
                        ? "carousel-indicator carousel-indicator--active"
                        : "carousel-indicator"
                }
                   onClick={this.props.onClick}/>

            </li>
        );
    }

}