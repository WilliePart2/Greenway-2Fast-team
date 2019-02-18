import React from 'react';
import {HeadText} from './headText';
import {TextBlock} from './textBlock';
import {Button} from '../button';
// noinspection ES6CheckImport
import {ImageGreen} from '../../img/LogoGreen.png';

export class MainSlider extends React.Component {
    render() {

        return (
            <div className="landing-main-slider">
                <div className="landing-slider-header">
                    <HeadText upper>
                        Свой бизнес - что может быть лучше? Это свобода и финансовая независимость!
                    </HeadText>
                </div>
                <div className="landing-slider-slide-text">
                    <HeadText upper>
                        Но самостоятельно это не всегда возможно
                    </HeadText>

                </div>
                <div className="landing-slider-text-block">
                    <HeadText upper>
                        Начни свой бизнес с сильной командой профессионалов!
                    </HeadText>
                </div>

                <div className="text-block">
                    <TextBlock center bold maxWidth="700">обучение</TextBlock>
                    <TextBlock bold maxWidth="700">сопровождение</TextBlock>
                    <TextBlock bold maxWidth="700">поддержка</TextBlock>
                    <TextBlock bold maxWidth="700">наставничество</TextBlock>
                </div>

                <div className="landing-slider-button">
                    <div className="landing-slider-button-logo--content">

                    </div>

                    <div className="landing-slider-button--content">
                        <Button primary>присоединиться</Button>
                        <Button primary>узнать подробней</Button>
                    </div>
                </div>
            </div>
        );
    }
}