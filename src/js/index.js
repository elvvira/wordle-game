// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { createContainer } from './gameboard.js';
import { boxWordPush } from './gameboard.js';
import { generetaSecretWord } from './word.js';

createContainer();
generetaSecretWord();

let generatedWord = [];

const formElement = document.getElementById('form-element');

formElement.addEventListener('submit', e => {
  e.preventDefault();
  //   console.dir(e.target.userword.value);
  generatedWord = e.target.userword.value;
  if (generatedWord.length === 5) {
    boxWordPush(generatedWord);
    e.target.userword.value = '';
  }
});
