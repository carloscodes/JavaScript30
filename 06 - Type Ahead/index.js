const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// browser fetch API, return promise
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

//console.log(cities);

function findMatches(wordToMatch, arr) {
  return arr.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

// population numbers
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArr = findMatches(this.value, cities);

  const html = matchArr
    .map(place => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = place.city.replace(
        regex,
        `<span class='hl'>${this.value}</span>`
      );

      const stateName = place.state.replace(
        regex,
        `<span class='hl'>${this.value}</span>`
      );

      return `
      <li> 
        <span class='name'>${cityName}, ${stateName} </span>
        <span class='population'>Pop: ${numberWithCommas(
          place.population
        )}</span>
      </li>`;
    })
    .join(''); // remove commas

  // insert to document/html
  suggestions.innerHTML = html;
}

const input = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

input.addEventListener('keyup', displayMatches);
