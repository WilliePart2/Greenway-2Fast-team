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
      <button className={this.classList}>
        {this.props.children}
      </button>
    );
  }
}