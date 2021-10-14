export const capitalizeString = (string) =>
  string
    .split('-')
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(' ');
