const time = 10000,
      step = 10;

function checkNum(num, elem) {
  let checkNumber = document.querySelector('#' + elem),
      n = 0,
      t = Math.round(time/(num/step));
  let interval = setInterval(() => {
    n = n + step;
    if (n == num) {
      clearInterval(interval);
    }
    checkNumber.innerHTML = n;
  },
  t);
}
checkNum(1000, 'check-number');