
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

// split() splits a string into an array of substrings, and returns the new array:
// The split() method does not change the original string.
const seconds = timeNodes
    .map(node => node.dataset.time) 
    .map(timeCode => {
        const[mins, secs] = timeCode.split(':').map(parseFloat);
        return (mins * 60) + secs;
        console.log(mins, secs);
    })
    .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;

const hour = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hour, minutes, secondsLeft);

    

