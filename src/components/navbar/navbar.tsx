import { FC } from 'react';

import { Search } from '../search';

import './navbar-style.scss';

export const Navbar: FC = () => (
  <div className="Navbar">
    <div>Olivia Chat</div>
    <Search/>
  </div>
);