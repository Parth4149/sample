
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const bandList = document.querySelector('#bands');

// The trim() method removes whitespace from both sides of a string.
// The trim() method does not change the original string.
function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort((a,b) => {
    return strip(a) < strip(b) ? -1: 1;
});


bandList.innerHTML = bands.map( band => {
    return `<li>${band}</li>`;
}).join('');
