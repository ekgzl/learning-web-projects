let buttons = document.querySelectorAll('button');

let comp_result = document.querySelector('.btn4');

let result = document.getElementById('result');

let humanR = document.querySelector('.human');

let compR = document.querySelector('.computer');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button);
    play(parseInt(button.value), Math.floor(Math.random() * 3) + 1);
  });
});

function updateContent(newContent) {
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = newContent;
  // Eski içeriği fade out yap
  resultElement.classList.add('fade');

  // Fade out tamamlandıktan sonra içeriği değiştir ve fade in yap
  setTimeout(() => {
    resultElement.classList.remove('fade');
  }, 1500); // Bu süre transition süresi ile aynı olmalı
}

function play(human, computer) {
  switch (computer) {
    case 1:
      comp_result.innerHTML = '👊';
      break;
    case 2:
      comp_result.innerHTML = '🖐';
      break;
    case 3:
      comp_result.innerHTML = '✌';
      break;
    default:
      break;
  }
  if (human === computer) {
    updateContent("It's a tie!");
  } else if (
    (human == 1 && computer == 3) ||
    (human == 2 && computer == 1) ||
    (human == 3 && computer == 2)
  ) {
    let n = parseFloat(humanR.textContent);
    n = n + 1;
    humanR.innerHTML = n.toString();
    updateContent('Player Wins!');
  } else {
    let n = parseFloat(compR.textContent);
    n = n + 1;
    compR.innerHTML = n.toString();
    updateContent('Computer Wins!');
  }
}
