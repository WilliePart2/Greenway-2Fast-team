import React from 'react';
import { NavMenu } from './NavBar/navMenu';
import { Logo } from '../logo';
import { SignIn } from './NavBar/signIn';

export class Header extends React.Component {
  render () {
    return (
      <div className="landing-header">
        <Logo/>
        <NavMenu/>
        <SignIn/>
      </div>
    );
  }
}
