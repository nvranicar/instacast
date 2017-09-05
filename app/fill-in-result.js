export default function fillInResult(el, data) {
  const location = document.createElement('h3');
  location.setAttribute('class', 'location');
  if (data.country_code === 'US') {
    location.innerText = `5-day forecast for ${data.city_name}, ${data.state_code}`;
  } else {
    location.innerText = `5-day forecast for ${data.city_name}, ${data.country_code}`;
  }
  el.appendChild(location);

  const grid = document.createElement('div');
  grid.setAttribute('class', 'grid');
  el.appendChild(grid);

  data.data.forEach(function(el) {
    const gridItem = document.createElement('div');
    gridItem.setAttribute('class', 'grid__item');
    grid.appendChild(gridItem);

    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    gridItem.appendChild(card);

    const split = el.datetime.split('2017-');
    const day = split[1];
    const dayEl = document.createElement('h4');
    dayEl.innerText = day;
    card.appendChild(dayEl);

    const icon = document.createElement('img');
    icon.setAttribute('class', 'weather-icon');
    icon.setAttribute('src', `/images/icons/${el.weather.icon}.png`);
    card.appendChild(icon);

    const temp = document.createElement('p');
    temp.innerText = `${el.temp}°F`;
    card.appendChild(temp);

    const condition = document.createElement('p');
    condition.innerText = el.weather.description;
    card.appendChild(condition);
  });
}
