import React from 'react';
import proposal_1 from '../img/Artboard2.jpg';
import proposal_2 from '../img/Artboard5.jpg';
import proposal_3 from '../img/Artboard6.jpg';
import proposal_4 from '../img/Artboard10.jpg';
import { ProposalItem } from './proposalItem';

export class ProposalSection extends React.Component {
  render() {
    let proposals = [
      proposal_1,
      proposal_2,
      proposal_3,
      proposal_4
    ];
    let counter = 0;
    return (
      <div className="proposals-section">
        {proposals.map(proposalItem => <ProposalItem key={counter++} image={proposalItem}/>)}
      </div>
    );
  }
}
