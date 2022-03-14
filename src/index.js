const interactives = document.getElementsByClassName('interactive');

for (let i = 0; i < interactives.length; i++) {
  const element = interactives[i];
  console.log('element: ', element);
  element.addEventListener('click', () => console.log('CLICK'));
  element.addEventListener('raycaster-intersected', () => element.setAttribute('color', 'red'));
  element.addEventListener('raycaster-intersected-cleared', () => element.setAttribute('color', 'white'));
}
