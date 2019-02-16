import React from 'react';

export class ProposalItem extends React.Component {
    render() {
        return (
            <div className="proposal-item">
                <button className="proposals-section--button">{this.props.itemcontent.top_content}</button>

                <div className="proposals-section-label--top">
                    <p>{this.props.itemcontent.p1}</p>
                    <p>{this.props.itemcontent.p2}</p>
                    <p>{this.props.itemcontent.p3}</p>
                    <p>{this.props.itemcontent.p4}</p>
                    <p>{this.props.itemcontent.p5}</p>
                </div>

                <button className="proposals-section--button">{this.props.itemcontent.btn_bottom}</button>

            </div>
        );
    }
}
