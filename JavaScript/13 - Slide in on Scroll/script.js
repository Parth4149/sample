
function debounce(callback, delay, immediate = false) { // return a function
  let timerId;
  return function(...args) {
    clearTimeout(timerId); // remove prev timerId

    const shouldCallImmediate = (timerId == null) && immediate;
    if (shouldCallImmediate) {
      callback.apply(this, args);
    }

    timerId = setTimeout(() => {
      if (!immediate) {
        callback.apply(this, args); // .apply allows us to pass this as an argument
      }
      timerId = null; // end of timeout, shouldCallImmediate can null if it is waiting for a delay to finish
    }, delay);
  }
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
    if (isHalfShown && isNotScrolledPast) {
      slideImage.classList.add('active');
    }
    // else {
    //   slideImage.classList.remove('active');
    // }
  });
}

window.addEventListener('scroll', debounce(checkSlide));

