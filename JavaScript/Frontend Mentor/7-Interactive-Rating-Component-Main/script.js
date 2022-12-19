
let mainContainer = document.querySelector(".main-container");
let thanksContainer = document.querySelector(".thank-container");
let rating = document.getElementById("rating-el");
let rates = document.querySelectorAll(".btn"); //* select all the element (all btn class)
// let submitButton = document.querySelector("#submit");
// let rateAgain = document.querySelector("#rate-again");

// submit.addEventListener("click", () => {
//     thanksContainer.classList.remove("hidden");  // this will remover hidden class
// })
// OR
function submit() {
    thanksContainer.classList.remove("hidden"); //  remove hidden class
    mainContainer.style.display = "none"; // this will style main container display:none
}
// rateAgain.addEventListener("click", () => {
//     thanksContainer.classList.add("hidden"); // this will remover hidden class
//     mainContainer.style.display = "block";
// })

function rateAgain() {
    thanksContainer.classList.add("hidden"); // this will remover hidden class
    mainContainer.style.display = "block"; // now main container display block
}
console.log(rates);
//* The "forEach()" method calls a function once for each array element
rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.textContent = rate.textContent; // update rating
    })
});

// rates.array.forEach((rate) => {
//     rate.addEventListener("click", () => {
//         console.log(rate.innerHTML);
//     })
// });
