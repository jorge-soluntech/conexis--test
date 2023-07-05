import { EMAIL_VALIDATION_REGEX } from '@/consts/forms_general';

/**
 * Determines if an email address is valid.
 *
 * @param email - The email address to validate.
 * @returns A boolean indicating whether the email address is valid.
 */
const isValidEmail = (email: string) => !EMAIL_VALIDATION_REGEX.test(email);

export default isValidEmail;
