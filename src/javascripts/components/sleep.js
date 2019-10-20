import '../../styles/sleep.scss';
import utilities from '../helpers/utilities';

const sleepPrinter = () => {
  let domString = '';
  let energy = 50;
  domString += `
  <div>
    <progress id="sleepHealth" value="${energy}" max="100">Energy</progress>
  </div>
  <h1>Sleep</h1>
  <div id='sleepButtons'>
  <button id='nap' class='sleep'>Nap</button>
  <button id='slumber' class='sleep'>Deep Slumber</button>
  </div>
  `;
  utilities.printToDom('sleep', domString);

  const napBtn = document.getElementById('nap');
  const slumberBtn = document.getElementById('slumber');

  napBtn.addEventListener('click', () => {
    if (energy + 50 <= 100) {
      energy += 50;
      document.getElementById('sleepHealth').value = energy;
    }
  });
  slumberBtn.addEventListener('click', () => {
    if (energy + 60 <= 110) {
      energy += 60;
      document.getElementById('sleepHealth').value = energy;
    }
  });
};

export default { sleepPrinter };
