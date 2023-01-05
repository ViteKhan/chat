import { FC } from 'react';

import { Chat } from 'components/chat';
import { Sidebar } from 'components/sidebar';

export const MainPage: FC = () => (
  <div style={{ display: 'flex', height: '100vh' }}>
    <Sidebar/>
    <Chat/>
  </div>
);