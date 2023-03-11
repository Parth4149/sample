
let countEl = document.getElementById("count-el");
let buttons = document.querySelectorAll(".btn");
let count = 0;

// buttons.forEach(function(btn) {     
// })


buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => { // e : event object
        // console.log(e.currentTarget);
        const styles = e.currentTarget.classList;
        console.log(styles);
        if(styles.contains('decrease')) {
            count--;
        } 
        else if(styles.contains('reset')) {
            count = 0;
        }
        else {
            count++;
        }
        countEl.innerText = count;
        if(count < 0) {
            countEl.style.color = 'red';
        }
        else if(count > 0) {
            countEl.style.color = 'green';
        }
    })
});


//? reference
// passing a parameter e to functions that handle JavaScript events
function myEvent(e) {
    var evtType = e.type
    alert(evtType)
    // displays click, or whatever the event type was
}