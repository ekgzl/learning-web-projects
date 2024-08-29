const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=happiness';

const quoteH = document.querySelector('.quote');
const author = document.querySelector('.quote-author');
const button = document.querySelector('.new-quote');
const selector = document.querySelector('.selector');
button.addEventListener('click', function checkNewQuote() {
  console.log(checkQuote());
});
function checkQuote() {
  const category = selector.value;
  fetch(apiUrl + '&category=' + category, {
    method: 'GET',
    headers: {
      'X-Api-Key': 'k8r6nn4fumCjRmCsACJ8sA==Uy0XFmdr4DsbWkcJ',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      /*response.json  yanıtı JSON'a çevirir */
      return response.json();
    })
    /* data argümanı yukarıda return olmuştur.*/
    .then((data) => {
      if (data.length > 0) {
        const quoteData = data[0];
        quoteH.textContent = quoteData.quote;
        author.textContent = quoteData.author;
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
