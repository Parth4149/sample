const time = document.querySelector("#time");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90; // add 90 deg
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegree = (minutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minutesDegree}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 24) * 360 + 90;

  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  // time.textContent = `${hours % 12} : ${minutes} : ${seconds}`;
  time.textContent = now.toLocaleTimeString();
}

//? Using clearInterval() to stop the digital watch:
function myStopFunction(myInterval) {
  clearInterval(myInterval);
}

const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

//? 1 second = 1000 milliseconds.
inter = setInterval(setDate, 1000); // setDate function call every 1 second

// clearInterval(inter);

// console.log(inter);
//? Display "Hello" every second (1000 milliseconds):
//* setInterval(function () {element.innerHTML += "Hello"}, 1000);

//? Call displayHello every second:
//* setInterval(displayHello, 1000);

