import React from 'react';
import { TextBlock } from './textBlock';

export class TextSlider extends React.Component {
  constructor(props) {
    super(props);

    let textFrames = this.props.textFrames || [];

    this.state = {
      textFrames,
      activeTextFrame: textFrames ? textFrames[0] : '',
      activeFrameIndex: 0
    };
  }

  componentWillMount () {
    this.textTimer = setInterval(() => {
      let newActiveFrameIndex;

      if (this.state.activeFrameIndex >= this.state.textFrames.length - 1) {
        newActiveFrameIndex = 0;
      } else {
        newActiveFrameIndex = this.state.activeFrameIndex + 1;
      }

      this.setState({
        activeTextFrame: this.state.textFrames[newActiveFrameIndex],
        activeFrameIndex: newActiveFrameIndex
      })
    }, this.props.interval);
  }

  componentWillUnmount () {
    clearInterval(this.textTimer);
  }

  render() {
    return (
      <div className="text-slider">
        <TextBlock center  size={30} attractive bold>
          {this.state.activeTextFrame}
        </TextBlock>
      </div>
    );
  }
}
