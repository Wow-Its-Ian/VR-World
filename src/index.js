const interactives = document.getElementsByClassName('interactive');

for (let i = 0; i < interactives.length; i++) {
  const element = interactives[i];

  element.addEventListener('click', () => console.log('CLICK'));
  element.addEventListener('raycaster-intersected', () => element.setAttribute('color', 'red'));
  element.addEventListener('raycaster-intersected-cleared', () => element.setAttribute('color', 'white'));
}

const xboxButtons = ['A', 'B', 'X', 'Y', 'L_BUMPER', 'R_BUMPER', 'L_TRIGGER', 'R_TRIGGER', 'SELECT', 'START', 'L_STICK', 'R_STICK', 'D_UP', 'D_DOWN', 'D_LEFT', 'D_RIGHT'];
const buttonKeys = {
  A: 'A',
  B: 'B',
  X: 'X',
  Y: 'Y',
  L_BUMPER: 'L_BUMPER',
  R_BUMPER: 'R_BUMPER',
  L_TRIGGER: 'L_TRIGGER',
  R_TRIGGER: 'R_TRIGGER',
  SELECT: 'SELECT',
  START: 'START',
  L_STICK: 'L_STICK',
  R_STICK: 'R_STICK',
  D_UP: 'D_UP',
  D_DOWN: 'D_DOWN',
  D_LEFT: 'D_LEFT',
  D_RIGHT: 'D_RIGHT',
};

document.addEventListener('gamepadbuttondown', (e) => {
  const { index } = e.detail;
  const button = xboxButtons[index];
  console.log('Button "%d" has been pressed.', index);
  console.log(`Button ${button} has been pressed.`);
  switch (button) {
    case buttonKeys.A:
      console.log('A: Jump');
      break;
    case buttonKeys.B:
      console.log('B: Action');
      break;
    case buttonKeys.X:
      console.log('X: Action');
      break;
    case buttonKeys.Y:
      console.log('Y: Action');
      break;
    case buttonKeys.L_BUMBER:
      console.log('L_BUMBER: Action');
      break;
    case buttonKeys.R_BUMPER:
      console.log('R_BUMPER: Action');
      break;
    case buttonKeys.L_TRIGGER:
      console.log('L_TRIGGER: Action');
      break;
    case buttonKeys.R_TRIGGER:
      console.log('R_TRIGGER: Action');
      break;
    case buttonKeys.SELECT:
      console.log('SELECT: Action');
      break;
    case buttonKeys.START:
      console.log('START: Action');
      break;
    case buttonKeys.D_UP:
      console.log('D_UP: Action');
      break;
    case buttonKeys.L_STICK:
      console.log('A: Action');
      break;
    case buttonKeys.R_STICK:
      console.log('R_STICK: Action');
      break;
    case buttonKeys.D_DOWN:
      console.log('D_DOWN: Action');
      break;
    case buttonKeys.D_LEFT:
      console.log('D_LEFT: Action');
      break;
    case buttonKeys.D_RIGHT:
      console.log('D_RIGHT: Action');
      break;
    default:
      break;
  }
});
