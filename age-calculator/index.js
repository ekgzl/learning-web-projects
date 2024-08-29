var input = document.querySelector('.date-input');
var btn = document.getElementById('btn');
var output = document.querySelector('.widget h2');

function calculator() {
  let currentTime = new Date();
  if (input.value != '') {
    //doğrudan bir tarih değeri değil, bir string olduğundan, onu bir Date objesine çevir.
    let birthDate = new Date(input.value);
    let age = currentTime.getFullYear() - birthDate.getFullYear();
    let monthDiff = currentTime.getMonth() - birthDate.getMonth();

    // eğer ayı daha gelmemişse veya aynı aydalarsa ve daha varsa age--
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && currentTime.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    output.innerHTML = 'Your Age is ' + age.toString() + ' years old.';
    setTimeout(function () {
      output.innerHTML = '';
    }, 1000);
  }
}

btn.addEventListener('click', calculator);
