import { FC, useEffect, useState } from 'react';
import { doc, DocumentData, onSnapshot } from 'firebase/firestore';

import { db } from 'firebase-config';
import { useApiContext } from 'context';

import './chats-styles.scss';

export const Chats: FC = () => {
  const [chats, setChats] = useState<DocumentData>();
  const currentUser = useApiContext();

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, 'userChats', currentUser.uid), doc => {
        if (doc.exists()) {
          setChats(doc.data());
        }
      });

      return unsub;
    };

    if (currentUser.uid) {
      getChats();
    }

  }, [currentUser.uid]);

  return (
    <div className="Chats">
      {chats && Object.entries(chats).sort((a, b)=> b[1].date - a[1].date)
        .map(([id, data]) => (
          <div key={id} className="UserChat">
            <img src={data.userInfo.photoURL} alt="user-avatar" />
            <div className="UserChatInfo">
              <span>{data.userInfo.displayName}</span>
              {/*<p>{chat[1].userInfo.displayName}</p>*/}
            </div>
          </div>
        )
      )}
    </div>
  );
};