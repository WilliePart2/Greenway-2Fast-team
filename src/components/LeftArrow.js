import React from 'react';

export class LeftArrow extends React.Component {
    render() {
        return (
            <div className="arrow-left--prev" onClick={this.props.goToPrevSlide}>
                <i className="arrow-left--i" aria-hidden="true"/>
            </div>
        );
    }
}

