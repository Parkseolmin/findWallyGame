// 상수
const IMG_SIZE = 60;
const WALLY_COUNT = 5;
const ODLO_COUNT = 5;
const GAME_DURATION_SEC = 105;

const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();
const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__time');
const gameScore = document.querySelector('.game__score');
const popUp = document.querySelector('.pop-up');
const popUpText = document.querySelector('.pop-up__message');
const popUpRefresh = document.querySelector('.pop-up__refresh');

let started = false;
let score = 0;
let timer = undefined;

const updateTimerText = (time) => {
   const minutes = Math.floor(time / 60);
   const seconds = time % 60;
   gameTimer.innerText = `${minutes} : ${seconds}`;
};

const startGameTimer = () => {
   let remainigTimeSec = GAME_DURATION_SEC;
   updateTimerText(remainigTimeSec);
   timer = setInterval(() => {
      if (remainigTimeSec <= 0) {
         clearInterval(timer);
         return;
      }
      updateTimerText(--remainigTimeSec);
   }, 1000);
};

const showTimerAndScore = () => {
   gameTimer.style.visibility = 'visible';
   gameScore.style.visibility = 'visible';
};

const showStopButton = () => {
   const icon = gameBtn.querySelector('.fa-play');
   icon.classList.add('fa-stop');
   icon.classList.remove('fa-play');
};

const showPopWithText = (text) => {
   popUpText.innerText = text;
   popUp.classList.remove('hide');
};

const hideGameButton = () => {
   gameBtn.style.visibility = 'hidden';
};

const stopGameTimer = () => {
   clearInterval(timer);
   hideGameButton();
   showPopWithText('REPLAY?');
};

const stopGame = () => {
   stopGameTimer();
};

const startGame = () => {
   initGame();
   showStopButton();
   showTimerAndScore();
   startGameTimer();
};

const randomNumber = (min, max) => {
   return Math.random() * (max - min) + min;
};

const addItem = (className, count, imgPath) => {
   const x1 = 0;
   const y1 = 0;
   const x2 = fieldRect.width - IMG_SIZE;
   const y2 = fieldRect.height - IMG_SIZE;
   for (let i = 0; i < count; i++) {
      const item = document.createElement('img');
      item.className = className;
      item.src = imgPath;
      item.style.position = 'absolute';
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      item.style.transform = `translate(${x}px, ${y}px)`;
      // item.style.left = `${x}px`;
      // item.style.top = `${y}px`;
      field.append(item);
   }
};

const initGame = () => {
   field.innerHTML = '';
   gameScore.innerText = WALLY_COUNT;
   addItem('wally', WALLY_COUNT, 'img/wally.png');
   addItem('odlo', ODLO_COUNT, 'img/odlo.png');
};

gameBtn.addEventListener('click', () => {
   if (started) {
      stopGame();
   } else {
      startGame();
   }
   started = !started;
});
