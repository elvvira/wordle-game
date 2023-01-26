const containerBoxes = document.getElementById('container-boxes');

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

export { createContainer };
