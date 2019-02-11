import React from 'react';
import { getClasses } from '../libs/utils';

export class Button extends React.Component {
  get classList () {
    let classes = {
      'button' : true,
      'primary': this.props.primary
    };

    return getClasses(classes);
  }
  render() {
    return (
      <div className={this.classList}>
        {this.props.children}
      </div>
    );
  }
}