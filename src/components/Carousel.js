import React from 'react';

export class Carousel extends React.Component {
    render() {
        return (
            <div className="carousel-item" style={{
                backgroundImage: `url(${this.props.image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: ' 50% 60%',
                width: '60%',
                height: '400px'
            }}>
            </div>
        );
    }
}