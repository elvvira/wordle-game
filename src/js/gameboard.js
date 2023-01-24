const containerBoxes = document.getElementById('container-boxes');
const rootStyles = document.documentElement.style;

let counterRow = 0;

const createContainer = () => {
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < 5; index++) {
    const newElementFile = document.createElement('div');
    newElementFile.classList.add('file');
    fragment.append(newElementFile);

    for (let index = 0; index < 5; index++) {
      const newElement = document.createElement('div');
      newElement.classList.add('box');
      newElementFile.append(newElement);
    }
  }
  containerBoxes.append(fragment);
};

const boxWordPush = word => {
  for (let index = 0; index < word.length; index++) {
    console.dir(word);
    containerBoxes.children[counterRow].children[index].textContent = word[index];
  }
  counterRow++;
};
export { createContainer };
export { boxWordPush };
