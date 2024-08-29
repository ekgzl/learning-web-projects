let start = document.querySelector('.btn1');
let stop = document.querySelector('.btn2');
let reset = document.querySelector('.btn3');

let min = document.querySelector('.min');
let sec = document.querySelector('.sec');

start.addEventListener('click', () => {
  let sec_ = parseFloat(sec.textContent);
  let min_ = parseInt(min.textContent);

  const myInterval = setInterval(() => {
    if (sec_ === 0) {
      if (min_ === 0) {
        alert('POMODRO IS FINISHED');

        // yukarıda tanımlanmış intervali silme işlemi.
        clearInterval(myInterval);
        min.innerHTML = '25';
        sec.innerHTML = '00';
      }
      sec_ = 59;

      min_ = min_ - 1;
    } else {
      sec_ = sec_ - 1;
    }

    console.log(min_);
    console.log(sec_);
    min.innerHTML = min_.toString();
    sec.innerHTML = sec_.toString();
  }, 1000);
  stop.addEventListener('click', () => {
    clearInterval(myInterval);
  });

  reset.addEventListener('click', () => {
    clearInterval(myInterval);
    min.innerHTML = '25';
    sec.innerHTML = '00';
  });
});
