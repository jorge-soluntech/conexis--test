import phoneFormatter from '@/utils/phoneFormatter';

/**
 * Custom hook for handling phone number formatting.
 */
const usePhoneNumber = () => {
  const onChangePhoneNumber = (event: any) => {
    const { value } = event.target;
    return phoneFormatter(value);
  };

  return { onChangePhoneNumber };
};

export default usePhoneNumber;
