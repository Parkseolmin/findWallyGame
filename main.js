// 상수
const IMG_SIZE = 60;
const WALLY_COUNT = 5;
const ODLO_COUNT = 5;

const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();

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
   addItem('wally', WALLY_COUNT, 'img/wally.png');
   addItem('odlo', ODLO_COUNT, 'img/odlo.png');
};