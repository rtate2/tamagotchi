import '../../styles/play.scss';
import utilities from '../helpers/utilities';

const playPrinter = () => {
  let domString = '';
  let fun = 50;
  domString += `
  <div>
    <progress id="funHealth" value="${fun}" max="100"></progress>
  </div>
  <h1>Fun</h1>
  <div id='funButtons'>
  <button id='superFun' class='food'>Super Fun!!</button>
  <button id='slightlyFun' class='food'>Slightly Fun!</button>
  </div>
  `;
  utilities.printToDom('play', domString);

  const superBtn = document.getElementById('superFun');
  const slightlyBtn = document.getElementById('slightlyFun');

  superBtn.addEventListener('click', () => {
    if (fun + 50 <= 110) {
      fun += 50;
      document.getElementById('funHealth').value = fun;
    }
  });
  slightlyBtn.addEventListener('click', () => {
    if (fun + 2 <= 99) {
      fun += 2;
      document.getElementById('funHealth').value = fun;
    }
  });
};

export default { playPrinter };
