import { FC } from 'react';
import classNames from 'classnames';

import { NavLink } from 'react-router-dom';

import './NavigationLink.scss';

interface Props {
  to: string,
  title: string,
}

export const NavigationLink: FC<Props> = ({ to, title }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames(
      'navigation-link',
      { 'navigation-link--is-active': isActive },
    )}
  >
    <span className='navigation-link-title'>{title}</span>
  </NavLink>
);
