var mail = document.querySelector('.mail');
var phone = document.querySelector('.phone');
var names = document.querySelector('.name');
var img = document.querySelector('.img');

let apiUrl = 'https://randomuser.me/api/';

document.addEventListener('DOMContentLoaded', async () => {
  //api yakalama
  var response = await fetch(apiUrl);

  //apiyi jsona çevirme
  var data = await response.json();

  let index = 0;

  // ilk slayt
  nextData();

  // sürekli yenilenen interval
  setInterval(nextData, 5000); // Change slide every 05 seconds

  async function nextData() {
    // Elemanların görünürlüğünü azalt
    mail.style.opacity = 0;
    phone.style.opacity = 0;
    names.style.opacity = 0;
    img.style.opacity = 0;

    // Verileri değiştir
    setTimeout(async () => {
      mail.innerHTML = '<i class="fa fa-envelope"></i>' + data.results[0].email;
      phone.innerHTML = '<i class="fa fa-phone"></i>' + data.results[0].phone;
      names.innerHTML =
        data.results[0].name.first + ' ' + data.results[0].name.last;
      img.src = data.results[0].picture.large;

      // Yeni verileri yakala
      response = await fetch(apiUrl);
      data = await response.json();

      // Elemanların görünürlüğünü artır
      mail.style.opacity = 1;
      phone.style.opacity = 1;
      names.style.opacity = 1;
      img.style.opacity = 1;
    }, 1000); // Geçiş süresine uygun olarak timeout ayarla
  }
});
