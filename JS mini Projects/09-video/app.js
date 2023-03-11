// MDN
/*
- The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, 
  without waiting for stylesheets, images, and sub-frames to finish loading.
- The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
*/


// handlePreLoader();
const btn = document.querySelector('.switch-btn');
btn.addEventListener('click', togglePlay);

function togglePlay(e) {
    // console.log(e.target.textContent);
    if(!btn.classList.contains("slide")) {
        btn.classList.add('slide');
        video.pause();
    } else {
        btn.classList.remove('slide');
        video.play();
    }
    // const text = e.target.innerText.toLowerCase(); // pause or play
    // console.log(text);
    // video[text]();
    // btn.classList.toggle('slide');
}

const video = document.querySelector('.video-container');

const preloader = document.querySelector('.preloader');

//? The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images
window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader');
});

// https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
// https://www.google.com/search?client=firefox-b-d&q=addeventlistener+load+vs+onload