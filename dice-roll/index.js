let btn = document.querySelector('.roll');
let list = document.querySelector('.list ul');
let dice = document.querySelector('.dice');
let index = 1;
btn.addEventListener('click', () => {
  dice.classList.remove('roll-animation');
  void dice.offsetWidth; // Tarayıcıya yeniden işleme yapması için boş bir stil değişikliği
  dice.classList.add('roll-animation');
  let li = document.createElement('li');

  // 1'den 6ya kadar random sayı üretir.
  let number = Math.floor(Math.random() * 6) + 1;

  switch (number) {
    //! ``kullanmalısın $ için '' değil.!!!!
    case 1:
      li.innerHTML = `Roll ${index}: <span>⚀</span>`;
      dice.innerHTML = '⚀';
      break;
    case 2:
      li.innerHTML = `Roll ${index}: <span>⚁</span>`;
      dice.innerHTML = '⚁';
      break;
    case 3:
      li.innerHTML = `Roll ${index}: <span>⚂</span>`;
      dice.innerHTML = '⚂';
      break;
    case 4:
      li.innerHTML = `Roll ${index}: <span>⚃</span>`;
      dice.innerHTML = '⚃';
      break;
    case 5:
      li.innerHTML = `Roll ${index}: <span>⚄</span>`;
      dice.innerHTML = '⚄';
      break;

    case 6:
      li.innerHTML = `Roll ${index} <span>⚅</span>`;
      dice.innerHTML = '⚅';
      break;
    default:
      break;
  }

  list.appendChild(li);
  index++;
});
