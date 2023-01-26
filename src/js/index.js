// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { createContainer } from './gameboard.js';
import { boxWordPush } from './boxPush.js';
import { generateSecretWord } from './word.js';

const formElement = document.getElementById('form-element');

createContainer();

const secretWord = generateSecretWord();
let generatedWord;

console.log(secretWord);

formElement.addEventListener('submit', e => {
  e.preventDefault();

  generatedWord = e.target.userword.value;

  if (generatedWord.length === 5) {
    boxWordPush(secretWord, generatedWord);

    e.target.userword.value = '';

    console.log(generatedWord);
  }
});
