import React from 'react';
import { NavMenuLink } from './navMenuLink';

export class NavMenu extends React.Component {
  render () {
    return (
      <div className="landing-nav-menu">
        <NavMenuLink to="/possibilities">Возможности</NavMenuLink>
        <NavMenuLink to="/products">Продукция</NavMenuLink>
        <NavMenuLink to="/about-company">О компании</NavMenuLink>
      </div>
    );
  }
}
