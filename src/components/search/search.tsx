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

export const Search: FC = () => {
  const { language } = useLangContext();
  const currentUser = useApiContext();
  const [searchText, setSearchText] = useState<string>('');
  const [user, setUser] = useState<DocumentData | null>(null);
  const onChange = (event) => setSearchText(event.target.value);
  const searchUserHandler = async () => {
    const userQuery = query(collection(db, 'users'), where('displayName', '==', searchText));
    try {
      const querySnapshot = await getDocs(userQuery);
      querySnapshot.forEach((doc) => {
        const foundUser = doc.data();
        console.log(foundUser);
        setUser(foundUser);
      });
    } catch (err) {
      const errorMessage = (err as Error).message;
      getErrorMessage(errorMessage);
    }
  };
  const onKeyDown = (event) => {
    return event.code === 'Enter' && searchUserHandler();
  };

  const selectUserHandler = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      // @ts-ignore
      currentUser?.uid > user?.uid
        ? currentUser?.uid + user?.uid
        : user?.uid + currentUser?.uid;

    try {
      const res = await getDoc(doc(db, 'chats', combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, 'chats', combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, 'userChats', user?.uid), {
          [combinedId + '.userInfo']: {
            uid: currentUser?.uid,
            displayName: currentUser?.displayName,
            photoURL: currentUser?.photoURL,
          },
          [combinedId + '.date']: serverTimestamp(),
        });

        await updateDoc(doc(db, 'userChats', user?.uid), {
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

    setUser(null);
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
      {!user &&
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
      {user &&
        <Flex
          position="absolute"
          border="1px solid"
          w="170px"
          top="40px"
          wordBreak="break-word"
          onClick={selectUserHandler}
        >
          <img src={user.photoUrl} alt={user.displayName}/>
          {user.displayName}
        </Flex>
      }
    </Flex>
  );
};