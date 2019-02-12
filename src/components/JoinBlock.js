import React from 'react';

import {TextBlock} from "./textBlock";
import {Button} from "./button";

export class JoinBlock extends React.Component {
    render() {
        return (
            <div className="welcome-block">
                <div className="welcome-block-text">
                    <TextBlock center maxWidth="500">
                        Присойденяйтесь к нашей команде прямо сейчас и начните зарабатывать
                    </TextBlock>
                </div>
                <div className="welcome-block-button">
                    <div className="welcome-block-button--content">
                        <Button primary>Посмотреть вебинар</Button>
                    </div>
                </div>
            </div>
        );
    }
}