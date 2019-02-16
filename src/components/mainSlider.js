import React from 'react';
import {HeadText} from './headText';
import {TextSlider} from './textSlider';
import {TextBlock} from './textBlock';
import {Button} from './button';
import {greenwaylogo} from '../img/logo_greenway.png';

export class MainSlider extends React.Component {
    render() {
        let textFrames = [
            'Неограниченные возможности',
            'Бизнес будущего',
            'Новая реальность',
            'Экология личного пространства'
        ];
        return (
            <div className="landing-main-slider">
                <div className="landing-slider-header">
                    <HeadText upper>
                        Свой бизнес - что может быть лучше? Это собода и финансовая независимость!
                    </HeadText>
                </div>
                <div className="landing-slider-slide-text">
                    <HeadText upper>
                        Но самостоятельно это не всегда возможно
                    </HeadText>

                </div>
                <div className="landing-slider-text-block">
                    <HeadText upper>
                        Начни свой бизнес с сильной командой професионалов!
                    </HeadText>
                </div>
                <div className="landing-slider-button">

                    <div className="landing-slider-button-logo--content">
                        <img src={greenwaylogo} className="landing-slider-logo--image"/>
                    </div>
                    <div className="landing-slider-button--content">
                        <Button primary>присойдениться</Button>
                        <Button primary>узнать подробней</Button>
                    </div>
                </div>
            </div>
        );
    }
}