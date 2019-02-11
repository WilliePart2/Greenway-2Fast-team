import React from 'react';
import logo from '../img/logo.png';

export class Logo extends React.Component {
  render () {
    return (
      <div className="landing-logo">
        <div className="landing-logo--container">
          <img className="landing-logo--image" src={logo} />
        </div>
      </div>
    )
  }
}
