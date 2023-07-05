/* eslint-disable no-useless-escape */
export const EMAIL_VALIDATION_REGEX =
  /^(?!.*\.\.)\w+([\w.'!#$%&*+\/=?^`{|}~-])*\w+@(\w+\.)+\w{2,8}$/;

export const INPUT_NUMBER_PARSER_REGEX = /\D/g;

export const PASSWORDS_VALIDATION_REGEX =
  /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{3,}$/;

export const formatDate = 'YYYY-MM-DD';
export const customFormatDate = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
export const shortDateFormat = 'MM/DD/YYYY';
