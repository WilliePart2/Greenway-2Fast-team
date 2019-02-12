import React from 'react';
import proposal_1 from '../img/Artboard2.jpg';
import proposal_2 from '../img/Artboard5.jpg';

import {ProposalItem} from './proposalItem';

export class ProposalSection extends React.Component {
    render() {
        let proposals = [
            proposal_1,
            proposal_2
        ];
        let counter = 0;
        return (
            <div className="proposals-section">
                {proposals.map(proposalItem => <ProposalItem key={counter++} image={proposalItem}/>)}
            </div>
        );
    }
}
