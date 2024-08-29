const apiKey = '5f14b5322060b7cd2b68bf40495939fe';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);
});

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 400) {
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
    document.querySelector('.details').style.display = 'none';
  } else {
    document.querySelector('.error').style.display = 'none';
    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.details').style.display = 'flex';
    var data = await response.json();

    /* document ile class'a erişip içeriğini değiştiriyor.*/
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML =
      Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/s';

    const weatherIcon = document.querySelector('.weather-icon');

    if (data.weather[0].main == 'Clouds') {
      /* weatherIcon'un src'sini değiştirir.*/
      weatherIcon.src = 'images/clouds.png';
    } else if (data.weather[0].main == 'Clear') {
      weatherIcon.src = 'images/clear.png';
    } else if (data.weather[0].main == 'Rain') {
      weatherIcon.src = 'images/rain.png';
    } else if (data.weather[0].main == 'Drizzle') {
      weatherIcon.src = 'images/drizzle.png';
    } else if (data.weather[0].main == 'Mist') {
      weatherIcon.src = 'images/clear.png';
    }
  }
}

window.onload = () => {
  checkWeather('Göksun');
};
