const adviceNumberId = document.querySelector('.adviceNumber');
const adviceText = document.querySelector('.adviceText');
const randomizeBtn = document.querySelector('#randomizeBtn');

async function getRandomAdvice() {
  const res = await fetch('https://api.adviceslip.com/advice', {cache: "no-cache"});
  const data = await res.json();

  const advice = data.slip.advice;
  const adviceId = data.slip.id;

  if (res.status !== 200) {
    adviceText.textContent = `The Advice Slip API doesn't seem to be working at this time :(`;
  } else {
    adviceNumberId.textContent = `Advice #${adviceId}`;
    adviceText.textContent = advice;
  }
}

randomizeBtn.addEventListener('click', () => {
  adviceNumberId.textContent = '';
  adviceText.textContent = '';

  getRandomAdvice();
});

getRandomAdvice();