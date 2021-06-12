const element = document.querySelector('.entries');
const done = document.querySelector('.done');
let counter = 0;
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

element.innerHTML = counter;
plus.addEventListener('click', () => {
  counter++;
  element.innerHTML = counter;
});
minus.addEventListener('click', () => {
  counter--;
  element.innerHTML = counter;
});
done.addEventListener('click', () => {
  let timeMinut = parseInt(counter) * 60;
  plus.hidden = true;
  minus.hidden = true;
  done.classList.add('hidden');
  const timer = setInterval(() => {
    const seconds = timeMinut % 60;
    const minutes = (timeMinut / 60) % 60;
    const hour = (timeMinut / 60 / 60) % 60;
    if (timeMinut <= 0) {
      plus.hidden = false;
      minus.hidden = false;
      done.classList.remove('hidden');
      clearInterval(timer);

      alert('Время закончилось');
    } else {
      const strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;

      element.innerHTML = strTimer;
    }
    --timeMinut;
  }, 1000);
});
