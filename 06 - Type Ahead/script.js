
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let cities = [];

//? When fetching data from external sources or servers, you need to make sure that the data returned is in JSON format. 
//? Then you can consume the data within your application.
//? Fetch API reads a JSON file in JavaScript by sending an HTTP request, while the import statement does not
//?  require any HTTP request but rather works like every other import we make.
// Still, in a situation where we don't need to use an HTTP request, we could use the import statement. 
// We can use the import statement when we use a library like React, Vue, and so on which has to do with modules. 
// This means we won't need to add the type of module, and also, we won't need to add the type of file.

// const prom = fetch(endpoint); // Promise { <state>: "pending" }
//? The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data)); // push all data into cities 
    // .then(data => cities = data); // push all data into cities 
// ... used to fetch all element otherwise it will fetch array of data
// console.log(cities);

//? Regular Expression Modifiers            // https://www.w3schools.com/jsref/jsref_obj_regexp.asp
// Modifiers can be used to perform case-insensitive more global searches:
//*  i -> Perform case-insensitive matching 	
//*  g -> Perform a global match (find all matches rather than stopping after the first match) 	
//*  m -> Perform multiline matching

//? google 
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

let value = '';
function findMatches(wordToMatch, cities) {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi'); // here performs global and case-insensitive matching
    // console.log(regex);  // RegExp converts string into regex form  e.g. /Bos/gi
    return cities.filter(place => {
        return place.city.match(regex) || place.state.match(regex);
    });
}

function displayMatches() { 
    value = (this.value == '0') ? value : this.value;
    const matchArray = findMatches(value, cities);
    // console.log('------ :'+value);
    const sortedData = sortData(matchArray);
    // console.log(sortedData);
    const html = sortedData.map(place => {
        const regex = new RegExp(value, 'gi');
        // The replace() method searches a string for a value or a regular expression, returns a new string with the value(s) replaced.
        // The replace() method does not change the original string.
        const cityName = place.city.replace(regex, `<span class="hl">${value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${value}</span>`);
        return `
        <li>
            <span class="rank">${place.rank} </span>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
        </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const filterBtn = document.querySelector('.filter-btn');
const closeBtn = document.querySelector('.close-btn');
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keydown', displayMatches);


function changeFilter() {
    filterBtn.parentElement.classList.toggle('show-list');
}
filterBtn.addEventListener('click', changeFilter);
const filterTypes = document.querySelectorAll('.filter-list li');

let sortType = '0';
filterTypes.forEach(type => {
    type.addEventListener('click',(e) => {
        sortType = e.currentTarget.dataset.value;
    });
    type.addEventListener('click',displayMatches);
});

function sortData(data) { // array
    console.log(sortType);
    if(sortType == '1') {
        return data.filter(place => {
            return place.city;
        });
    } else if(sortType == '2') {
        return data.filter(place => {
            return place.state;
        });
    } else if(sortType == '3') {
        return data.sort((a, b) => a.rank - b.rank);
    } else if(sortType == '4') {
        return data.sort((a, b) => b.rank - a.rank);
    } else if(sortType == '5')  {
        return data.sort((a,b) => a.population - b.population);
    } else if(sortType == '6') {
        return data.sort((a,b) => b.population - a.population);
    } else {
        return data;
    }
}



//* Sort By 
// City 
// state
// Population low to high 
// Population high to low
// rank low to high
// rank high to low
