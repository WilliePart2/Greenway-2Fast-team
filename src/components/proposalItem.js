import React from 'react';

export class ProposalItem extends React.Component {
    render() {
        return (
            <div className="proposal-item">
                <img src={this.props.image}/>
                <div className="proposals-section--label">Text</div>
                <div className="proposals-section-label--top">
                    <p>-some text</p>
                    <p>-some text</p>
                    <p>-some text</p>
                </div>
                <div className='proposals-section-label--bottom'>
                    bold text
                </div>
                <button className="proposals-section--button">button</button>

            </div>
        );
    }
}
