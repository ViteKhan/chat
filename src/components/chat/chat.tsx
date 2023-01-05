import React, { FC } from 'react';
import { signOut } from 'firebase/auth';

import { auth } from 'firebase-config';
import { Input } from '../input';
import { Message } from '../message';

import './chat-style.scss';

export const Chat: FC = () => (
  <div className="Chat">
    <div className="ChatNavbar">
      <button onClick={() => signOut(auth)}>logout</button>
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