const slides = document.querySelectorAll('.slide');

const main1 = document.getElementById('main');

const left = document.getElementById('left');
const right = document.getElementById('right');

const SLIDES_COUNT = slides.length;

let current_slide = 0;

left.addEventListener("click", () => {
    current_slide++;
    if(current_slide >= SLIDES_COUNT){
        current_slide = 0;
    }
    updateMain();
});

right.addEventListener("click", () => {
    current_slide--;
    if(current_slide < 0){
        current_slide = SLIDES_COUNT - 1;
    }
    updateMain();
});

function updateMain() {
    main1.style.transform = `translateX(${-current_slide * slides[0].offsetWidth}px)`;

    console.log(slides[current_slide].getAttribute("data-bg"));

    document.body.style.background = `#${slides[current_slide].
    getAttribute(
        "data-bg"
    )}`;
}