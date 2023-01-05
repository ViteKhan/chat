import React, { FC } from 'react';

import './chats-styles.scss';

const CHATS = [
  {
    img: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
    name: 'Viktor',
    message: 'Hello',
  },
  {
    img: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
    name: 'Viktor',
    message: 'Hello',
  },
  {
    img: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
    name: 'Viktor',
    message: 'Hello',
  },
];

export const Chats: FC = () => (
  <div className="Chats">
    {CHATS.map((chat, index) => (
      <div key={index} className="UserChat">
        <img src={chat.img} alt="user-avatar" />
        <div className="UserChatInfo">
          <span>{chat.name}</span>
          <p>{chat.message}</p>
        </div>
      </div>
    ))}
</div>
);