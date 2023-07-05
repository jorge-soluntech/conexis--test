import { ONLY_NUMBER_REGEX } from '@/consts/regex';

const phoneFormatter = (value: string | undefined) => {
  const phoneNumber = value?.toString().replace(ONLY_NUMBER_REGEX, ''); // Remove any character that is not a number

  let formattedPhoneNumber = '';

  if (!phoneNumber) {
    return '';
  }

  if (phoneNumber.length < 4) {
    formattedPhoneNumber = `(${phoneNumber}`;
  } else if (phoneNumber.length < 7) {
    formattedPhoneNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3
    )}`;
  } else {
    formattedPhoneNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  }

  return formattedPhoneNumber;
};

export default phoneFormatter;
