import { compareWord } from './compareWord';
const containerBoxes = document.getElementById('container-boxes');

let counterRow = 0;

const boxWordPush = (secretWord, word) => {
  for (let index = 0; index < word.length; index++) {
    let correct = compareWord(secretWord, word);
    console.log(correct);

    containerBoxes.children[counterRow].children[index].classList.add(`${classList}`);
    containerBoxes.children[counterRow].children[index].textContent = word[index];
  }
  counterRow++;
};

export { boxWordPush };
