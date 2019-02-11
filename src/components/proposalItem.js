import React from 'react';

export class ProposalItem extends React.Component {
  render() {
    return (
      <div className="proposal-item">
        <img src={this.props.image} />
      </div>
    );
  }
}
