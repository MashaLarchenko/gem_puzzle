
const renderGameController = (time = 0, move = 0) => {
  const controllerContainer = document.createElement('div');
  controllerContainer.classList.add('controller_container');
  const controllBtn = document.createElement('ul');
  controllBtn.classList.add('controllBtn_container');
  const btnList = ['start', 'stop', 'reset', 'result'];
  const buttons = btnList.map((button) => `<li class='${button}_btn controllBtn'>${button}</li>`);
  controllBtn.innerHTML = buttons.join('');
  const gameInfo = `<div class='game_info'><div class='timer'>Time: ${time}</div><div class='movesCount'>Steps: ${move} </div></div>`;
  controllerContainer.appendChild(controllBtn);
  controllerContainer.innerHTML += gameInfo;
  return controllerContainer;
};

export default renderGameController;
