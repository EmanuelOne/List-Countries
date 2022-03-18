var countries = [];
var cardContainer = document.getElementById('cardContainer');

fetch('https://restcountries.com/v3.1/all')
  .then(function (response) {
    // console.log(response);
    return response.json();
  })
  .then(function (data) {
    // console.log(data[0]);
    // const contry = data[0];
    // data.forEach()
    for (let itemIndex in data) {
      //   console.log(data[itemIndex], itemIndex);
      countries.push({
        name: data[itemIndex].name.common,
        population: data[itemIndex].population,
        region: data[itemIndex].region,
        capital: data[itemIndex].capital,
        flag: data[itemIndex].flags,
      });
    }
    // console.log(countries);
    for (let country of countries) {
      var card = document.createElement('div');
      card.className = 'card bg-white shadow rounded-[10px]';
      card.innerHTML = `
      <img
      src=${country.flag.png}
      alt=""
      class="rounded-t-[5px] h-[200px] w-[100%] object-cover"
      />

      <div class="px-4 py-4 flex flex-col gap-2">
      <h1 class="text-2xl font-bold">${country.name}</h1>
      <div class="font-bold">
        <p>Population: <span class="font-medium">${country.population}</span></p>
        <p>Region: <span class="font-medium"> ${country.region} </span></p>
        <p>Capital: <span class="font-medium"> ${country.capital} </span></p>
      </div>
      </div>`;
      cardContainer.appendChild(card);
    }
  })
  .catch(function (error) {
    console.log(error);
  });
//1   get the data
//2 parse the response to json
//3 console.log(countries);

// arrow function

// const arrfn = () => {};
// console.log(countries);
// What is a Promise?
// data not available yet so we need to wait for it to be available
/*
function name() {} // normal function
var name = function () {}; // anonymous function assign to variable
var name = () => {}; // arrow function
*/
