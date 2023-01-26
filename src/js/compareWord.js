const compareWord = (secretWord, generateWord) => {
  let wordToCheck = secretWord;
  let className;
  for (let index = 0; index < generateWord.length; index++) {
    if (secretWord[0] === generateWord[0]) {
      className = 'letter--correct';
      wordToCheck = wordToCheck[i];
    } else {
      return 'grey';
    }
  }
};

export { compareWord };
