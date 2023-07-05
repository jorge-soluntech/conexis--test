export const getInitials = (name: string) =>
  name
    ?.match(/\b(\w)/g)
    ?.join('')
    .substring(0, 3)
    .toUpperCase();

export const capitalizeString = (str: any) =>
  (str?.charAt(0) as string).toUpperCase() + (str?.slice(1) as string);
