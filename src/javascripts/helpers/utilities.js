const printToDom = (divId, textToPrint) => {
  const divContainer = document.getElementById(divId);
  divContainer.innerHTML = textToPrint;
};

export default { printToDom };
