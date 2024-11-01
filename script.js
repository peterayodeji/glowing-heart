const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

const createHeart = function (e) {
  const fav = document.createElement('div');
  fav.classList.add('fav');
  fav.innerHTML = `
    <svg class="heart" viewBox="0 0 256 256">
      <path
        d="M240,98a57.63,57.63,0,0,1-17,41L133.7,229.62a8,8,0,0,1-11.4,0L33,139a58,58,0,0,1,82-82.1L128,69.05l13.09-12.19A58,58,0,0,1,240,98Z"
      />
    </svg>
  `;

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  fav.style.top = `${yInside}px`;
  fav.style.left = `${xInside}px`;

  loveMe.appendChild(fav);
  times.innerHTML = ++timesClicked;

  setTimeout(() => fav.remove(), 800);
};

/* ----------------------------------------------------- */

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener('click', e => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});
