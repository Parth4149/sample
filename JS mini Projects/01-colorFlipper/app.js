// const colors = ["green", "#00ffff","dodgerblue","rgb(255, 20, 147)","hsl(210, 100%, 56%)","hsl(125, 71%, 66%)"];
let colorEl = document.querySelector(".color-el");
let btn = document.getElementById("btn");
// let count = 0;

const hex = [0,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];    

btn.addEventListener("click", () => {  
    let hexColor = "#";
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandom()];     //? generate any random color 
    }
    console.log(hexColor);
    document.body.style.backgroundColor = hexColor;
    colorEl.textContent = hexColor;
});

// btn.addEventListener("click" function () {
// 
// });

function getRandom() {
    return Math.floor(Math.random() * hex.length);
}