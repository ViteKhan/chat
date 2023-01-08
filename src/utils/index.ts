import { toast } from 'react-toastify';
import { User } from 'firebase/auth';

export const getSuccessMessage = (message: string) => (
  toast.success(message, {
    pauseOnHover: true,
  })
);

export const getErrorMessage = (message: string) => (
  toast.error(message, {
    pauseOnHover: true,
  })
);

export const getCombinedId = (currentUser: User, user: User) => currentUser?.uid > user.uid
  ? currentUser?.uid + user.uid
  : user.uid + currentUser?.uid;