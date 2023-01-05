import { FC } from 'react';

import { Chats } from '../chats';
import { Navbar } from '../navbar';

import './sidebar-style.scss';
export const Sidebar: FC = () => (
  <div className="Sidebar">
    <Navbar/>
    <Chats/>
  </div>
);