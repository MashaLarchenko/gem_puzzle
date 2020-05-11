export default function solvedPuzzleWindow(time, step) {
  const finishGameWindow = `<div class="solved_window_wrapper"><div class="solved_window"><h3>Congratulation!!!</h3><p class="congratt_text">You solved this puzzle for ${time} minutes and for ${step} steps </p></div></div>`;
  const gameWindow = document.querySelector('.wrapper');
  gameWindow.innerHTML += finishGameWindow;
}
