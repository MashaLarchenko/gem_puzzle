import start from '../model/startWindow';

const listenEvents = () => {
  const startGameBtn = document.querySelector('.start_btn');
  console.log(startGameBtn);
  if (startGameBtn) startGameBtn.addEventListener('click', start.startGame);
};

const listenStartApp = () => {
  const startAppBtn = document.querySelector('.startApp_btn');
  startAppBtn.addEventListener('click', () => {
    start.startApp();
    listenEvents();
  });
};

export default { listenEvents, listenStartApp };
