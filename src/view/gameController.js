export default function renderGameController() {
  const controllerContainer = document.createElement('div');
  controllerContainer.classList.add('controller_container');
  const controllBtn = document.createElement('ul');
  controllBtn.classList.add('controllBtn_container');
  const btnList = ['start', 'stop', 'reset', 'result'];
  const buttons = btnList.map((button) => `<li class='${button}_btn controllBtn'>${button}</li>`);
  controllBtn.innerHTML = buttons.join('');
  // const gameInfo = document.createElement('div');
  const time = 0;
  const gameInfo = `<div class='game_info'><div class='timer'>Time: ${time}</div><div class='movesCount'>Steps: 0 </div></div>`;

  // const timer = document.createElement('div');
  // timer.classList.add('timer');
  // const movesCount = document.createElement('div');
  // movesCount.classList.add('movesCount');
  // gameInfo.appendChild(timer);
  // gameInfo.appendChild(movesCount);
  controllerContainer.appendChild(controllBtn);
  controllerContainer.innerHTML += gameInfo;
  return controllerContainer;
}
