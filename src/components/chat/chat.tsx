import { FC } from 'react';

import { Input } from '../input';
import { Message } from '../message';
import { UserMenu } from '../user-menu';

import './chat-style.scss';

export const Chat: FC = () => (
  <div className="Chat">
    <div className="ChatNavbar">
      <UserMenu/>
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