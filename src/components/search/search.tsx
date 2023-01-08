import { FC, useState } from 'react';
import { Box, Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { SearchIcon } from '@chakra-ui/icons';

import { db } from 'firebase-config';
import { getErrorMessage } from 'utils';
import { TEXTS } from 'common/constants';
import { useApiContext, useLangContext } from 'context';

// todo refactor this file
export const Search: FC = () => {
  const { language } = useLangContext();
  const currentUser = useApiContext();
  const [searchText, setSearchText] = useState<string>('');
  const [users, setUsers] = useState<DocumentData[]>([]);
  const [notFound, setNotFound] = useState<boolean>(false);

  const onChange = (event) => setSearchText(event.target.value);
  const searchUserHandler = async () => {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('displayName', '==', searchText));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map(doc => doc.data());
    if (data.length) {
      setUsers(data);
      setNotFound(false);
    } else {
      setUsers([]);
      setNotFound(true);
    }
  };
  const onKeyDown = (event) => {
    return event.code === 'Enter' && searchUserHandler();
  };

  const selectUserHandler = async (user) => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser?.uid > user.uid
        ? currentUser?.uid + user.uid
        : user.uid + currentUser?.uid;

    try {
      const res = await getDoc(doc(db, 'chats', combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, 'chats', combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, 'userChats', currentUser.uid), {
          [combinedId + '.userInfo']: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + '.date']: serverTimestamp(),
        });

        await updateDoc(doc(db, 'userChats', user.uid), {
          [combinedId + '.userInfo']: {
            uid: currentUser?.uid,
            displayName: currentUser?.displayName,
            photoURL: currentUser?.photoURL,
          },
          [combinedId + '.date']: serverTimestamp(),
        });
      }
    } catch (err) {
      const errorMessage = (err as Error).message;
      getErrorMessage(errorMessage);
    }

    setUsers([]);
    setSearchText('');
  };

  return (
    <Flex flexDirection="column" w="170px">
      <InputGroup>
        <Input
          size="xs"
          placeholder={TEXTS[language].FIELDS.SEARCH}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={searchText}
          pr="24px"
        />
        <InputRightElement h="24px" w="24px">
          <SearchIcon boxSize="12px"/>
        </InputRightElement>
      </InputGroup>
      {!users.length && notFound &&
        <Box
          position="absolute"
          border="1px solid"
          w="170px"
          top="40px"
          wordBreak="break-word"
        >
          {TEXTS[language].MESSAGES.NOT_FOUND_USER}
        </Box>
      }
      {!!users.length && !notFound &&
        (users.map(user => {
          const { displayName, uid, photoURL } = user;
          return (
            <Flex
              key={uid}
              position="absolute"
              border="1px solid"
              w="170px"
              top="40px"
              wordBreak="break-word"
              onClick={() => selectUserHandler(user)}
            >
              <img src={photoURL} alt={displayName}/>
              {displayName}
            </Flex>
          );
        }))
      }
    </Flex>
  );
};