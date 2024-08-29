var bill = document.querySelector('.bill');
var tip = document.querySelector('.tip');
var btn = document.querySelector('.btn');
var alert = document.querySelector('.alert');
var submit = document.querySelector('.bill-amount');
btn.addEventListener('click', () => {
  if (bill.value === '' || tip.value === '') {
    alert.style.display = 'flex';
    //1 saniye sonra none ayarlar
    setTimeout(function () {
      alert.style.display = 'none';
    }, 1000);
  } else {
    let temp =
      (parseFloat(bill.value) *
        (parseFloat(bill.value) + parseFloat(tip.value))) /
      100;
    console.log(temp);

    // noktadan sonra 2 '0' koyar:
    // $210.00
    submit.innerHTML = '$' + temp.toFixed(2);
    alert.style.display = 'none';
  }
});
