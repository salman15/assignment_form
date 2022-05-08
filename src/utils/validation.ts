export const forbiddenChars = ['a', '!', '@', 'A', 'z', '9', '2'];
export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const checkForbiddenChars = (e: string) => {
  const findCharacter = (item: string): boolean => {
    return e.includes(item);
  };
  return typeof forbiddenChars.find(findCharacter) === 'string';
};

export const validateEmail = (e: string) => {
  return emailRegex.test(e);
};
