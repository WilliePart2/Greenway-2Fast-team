import React from 'react';
import { NavLink } from 'react-router-dom';

export class NavMenuLink extends React.Component {
  render () {
    let { children, ...restProps } = this.props;
    return (
      <NavLink
        className="mav-menu-item"
        activeClassName="mav-menu-item--active"
        {...restProps}
      >
        {children}
      </NavLink>
    );
  }
}
