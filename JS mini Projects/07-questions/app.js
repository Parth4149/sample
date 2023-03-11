//* using selectors inside the element
//* traversing the dom


function show(e) {
    // console.log(e.currentTarget);
    // console.log(e.currentTarget.parentElement);
    // console.log(e.currentTarget.parentElement.parentElement);
    const question =  e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
}


const btns = document.querySelectorAll(".question-btn");
btns.forEach(btn => btn.addEventListener('click', show));



