import { ALL_WORDS } from './constants.js';

const generetaSecretWord = () => {
  console.log(ALL_WORDS[Math.floor(Math.random() * ALL_WORDS.length)]);
};
export { generetaSecretWord };
