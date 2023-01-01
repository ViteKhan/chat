import React, { FC } from 'react';

import { Input } from '../input';
import { Message } from '../message';

import './chat-style.scss';
export const Chat: FC = () => (
  <div className="Chat">
    <div className="ChatNavbar">
      <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="user-avatar" />
      <span>Viktor</span>
    </div>
    <div className="Content">
      <div className="Messages">
        <Message/>
        <Message/>
        <Message/>
      </div>
      <Input/>
    </div>
  </div>
);