var search = document.querySelector('.search');
var searchBtn = document.querySelector('.search-btn');
var wrap = document.querySelector('.wrap');
var alertBox = document.querySelector('.alert');
var alertBox1 = document.querySelector('.a1');
let apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
let key;
searchBtn.addEventListener('click', async () => {
  if (search.value != '') {
    wrap.innerHTML = '';
    key = search.value;

    const response = await fetch(apiUrl + key);
    const data = await response.json();

    //eğer data.meals yoksa else bloğu çalışır.
    if (data.meals) {
      // data meals içindeki bütün []'leri element ile alır
      data.meals.forEach((element) => {
        let widget = document.createElement('div');
        widget.setAttribute('class', 'widget');

        let image = document.createElement('img');
        image.src = element.strMealThumb;
        widget.appendChild(image);

        let h2 = document.createElement('h2');
        h2.innerHTML = element.strMeal;
        widget.appendChild(h2);

        let p = document.createElement('p');

        const ingredientsAndMeasures = [];

        for (let i = 1; i <= 20; i++) {
          let ingredient = element[`strIngredient${i}`];
          let measure = element[`strMeasure${i}`];
          if (ingredient && ingredient !== '') {
            ingredientsAndMeasures.push(`${ingredient}: ${measure}`);
          }
        }

        // join ile bir arraydeki bütün elementleri p tagine ekliyoruz.
        p.innerHTML = ingredientsAndMeasures.join(' , ');

        // p tagini widget div'ine ekliyoruz.
        widget.appendChild(p);

        let a = document.createElement('a');
        a.innerHTML = 'VIEW RECIPE';
        a.classList.add('view-recipe');
        a.href = element.strSource;
        widget.appendChild(a);
        wrap.appendChild(widget); // Widget'ı wrap'ye ekliyoruz
      });
    } else {
      // önce opacity = '1' yap;
      alertBox.style.opacity = '1';

      setTimeout(() => {
        alertBox.style.opacity = '0';
      }, 500); // 0.5 saniye sonra gizlemeye başla
    }
  } else {
    alertBox1.style.display = 'flex';
    setTimeout(() => {
      alertBox1.style.opacity = '1';
    }, 10);
    setTimeout(() => {
      alertBox1.style.opacity = '0';
      setTimeout(() => {
        alertBox1.style.display = 'none';
      }, 500);
    }, 2000);
  }
});
