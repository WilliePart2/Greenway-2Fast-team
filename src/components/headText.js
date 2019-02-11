import React from 'react';
import { getClasses } from '../libs/utils';

export class HeadText extends React.Component {
  get classList () {
    let classes = {
      'head-text': true,
      'uppercase': this.props.upper
    };

    return getClasses(classes);
  }
  render () {
    let { children, ...restProops } = this.props;
    return (
      <div className={this.classList}>
        {children}
      </div>
    );
  }
}
