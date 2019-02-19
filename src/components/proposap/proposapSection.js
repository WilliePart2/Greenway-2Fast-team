import React from 'react';

import {ProposalItem} from './proposalItem';

export class ProposalSection extends React.Component {

    render() {
        let proposals = [
            {
                top_content: "Почему GreenWay?",
                p1: "трендовая идея",
                p2: "вирусный продукт и маркетинг",
                p3: "большие доходы",
                p4: "глобальный бизнес",
                p5: "готовая система и четкие алгоритмы!",
                btn_bottom: "присойдениться"
            },
            {
                top_content: "Почему 2FAST TEAM?",
                p1: "дружный коллектив",
                p2: "профессионализм",
                p3: "нас уже 252 тысячи человек",
                p4: "бесплатное обучение",
                p5: "мы умеем работать как онлайн так и оффлайн",
                btn_bottom: "узнать подробнее"
            }
        ];


        let counter = 0;
        return (
            <div className="proposals-section">
                {proposals.map(proposalItem => <ProposalItem key={counter++} itemcontent={proposalItem}/>)}
            </div>
        );
    }
}
