import { toast } from 'react-toastify';

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