import React from 'react';

export class InformationBlockItem extends React.Component {
    render() {
        return (
            <div className="proposal-item">
                <div className="information-block-label--top">{this.props.content.top_content}</div>
                <div className="information-block-label">
                    <p>-{this.props.content.p1}</p>
                    <p>-{this.props.content.p2}</p>
                    <p>-{this.props.content.p3}</p>
                </div>
                <div className="information-block-label--bottom">{this.props.content.bottom_content}</div>
            </div>
        );
    }

}