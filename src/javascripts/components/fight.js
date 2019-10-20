import '../../styles/fight.scss';
import utilities from '../helpers/utilities';

const fightPrinter = () => {
  let domString = '';
  let strength = 100;
  domString += `
  <div>
    <progress id="fightHealth" value="${strength}" max="100"></progress>
  </div>
  <h1>Fight</h1>
  <div id='fightButtons'>
  <button id='run' class='fight'>Run Away!</button>
  <button id='violent' class='fight'>Fight!</button>
  </div>
  `;
  utilities.printToDom('fight', domString);

  const runBtn = document.getElementById('run');
  const fightBtn = document.getElementById('violent');

  runBtn.addEventListener('click', () => {
    if (strength + 1 <= 100) {
      strength += 1;
      document.getElementById('fightHealth').value = strength;
    }
  });
  fightBtn.addEventListener('click', () => {
    if (strength - 10 >= 0) {
      strength -= 10;
      document.getElementById('fightHealth').value = strength;
    }
  });
};

export default { fightPrinter };
