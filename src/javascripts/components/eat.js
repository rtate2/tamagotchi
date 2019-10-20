import '../../styles/eat.scss';
import utilities from '../helpers/utilities';

const eatPrinter = () => {
  let domString = '';
  let full = 100;
  domString = `
  <div>
  <progress id="health" value="100" max="${full}" min="0"></progress>
  </div>
  <h1>Eat</h1>
  <div id='foodButtons'>
  <button id='healthy' class='food'>Healthy</button>
  <button id='unhealthy' class='food'>Unhealthy</button>
  </div>
  `;
  utilities.printToDom('eat', domString);

  const healthyBtn = document.getElementById('healthy');
  const unhealthyBtn = document.getElementById('unhealthy');

  healthyBtn.addEventListener('click', () => {
    if (full + 10 <= 110) {
      full += 10;
      document.getElementById('health').value = full;
    }
  });
  unhealthyBtn.addEventListener('click', () => {
    if (full - 3 >= 0) {
      full -= 3;
      document.getElementById('health').value = full;
    }
  });
};

export default { eatPrinter };
