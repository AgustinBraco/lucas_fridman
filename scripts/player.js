const audio = document.getElementById('Audio');
const player = document.getElementById('Player');
const playerIcon = document.getElementById('PlayerIcon');

audio.volume = 0.1;

const play = () => {
  audio.play();
  player.classList.add('Play');
  player.classList.remove('Pause');
  playerIcon.classList.add('Play');
  playerIcon.classList.remove('Pause');
};

const pause = () => {
  audio.pause();
  player.classList.add('Pause');
  player.classList.remove('Play');
  playerIcon.classList.add('Pause');
  playerIcon.classList.remove('Play');
};

player.addEventListener('click', () => {
  if (playerIcon.classList.contains('Pause')) play();
  else pause();
});