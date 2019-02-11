import React from 'react';
import { HeadText } from './headText';
import { TextSlider } from './textSlider';
import { TextBlock } from './textBlock';
import { Button } from './button';

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
            Greenway
          </HeadText>
        </div>
        <div className="landing-slider-slide-text">
          <TextSlider textFrames={textFrames} interval={5000} />
        </div>
        <div className="landing-slider-text-block">
          <TextBlock center maxWidth="500">
            Начниет свой путь к свободе и финансовому успеху
          </TextBlock>
        </div>
        <div className="landing-slider-button">
          <div className="landing-slider-button--content">
            <Button primary>Посмотреть вебинар</Button>
          </div>
        </div>
      </div>
    );
  }
}
