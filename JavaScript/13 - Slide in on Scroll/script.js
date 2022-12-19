
// https://www.geeksforgeeks.org/debouncing-in-javascript/#:~:text=Debouncing%20is%20a%20programming%20practice,which%20a%20function%20gets%20invoked.
// https://www.freecodecamp.org/news/javascript-debounce-example/

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  // console.count(e);
  sliderImages.forEach(slideImage => {
    // half way through the image 
    // window.scrollY -> starting of the window
    const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 4;
    // bottom of the image
    // .offsetTop -> top of the image is how far from the top of actual window
    const imageBottom = slideImage.offsetTop + slideImage.height;
    const isHalfShown = slideInAt > slideImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if(isHalfShown && isNotScrolledPast) {
      slideImage.classList.add('active');
    } 
    // else {
    //   slideImage.classList.remove('active');
    // }
  });
} 

window.addEventListener('scroll', debounce(checkSlide));

