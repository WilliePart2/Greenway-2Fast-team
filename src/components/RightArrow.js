import React from 'react';

export class RightArrow extends React.Component {
    render() {
        return (
            <div className="arrow-right--next" onClick={this.props.goToNextSlide}>
                <i className="arrow-right--i" aria-hidden="true"/>
            </div>
        );
    }
}
