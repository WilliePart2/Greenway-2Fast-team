import React from 'react';

export class Text extends React.Component {
    render() {
        return (
            <div className="footer-content-label--item">
                {this.props.children}
            </div>
        );
    }
}