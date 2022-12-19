// get out  videoent
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider"); // 
const fullScreen = player.querySelector(".full-screen");

const volume = player.querySelector("#volume");
const playbackSpeed = player.querySelector("#speed");


// Build out function
function togglePlay() {
  // if(video.paused) {
  //     video.play();
  // } else {
  //     video.pause();
  // }
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function updateButton(e) {
  // console.log(this.paused);
  const icon = this.paused
    ? `<i class="fa-solid fa-play"></i>`
    : `<i class="fa-solid fa-pause"></i>`;
  toggle.innerHTML = icon;
}

function skip() {
  // console.log(this.dataset.skip);
  // convert into number
  video.currentTime += parseFloat(this.dataset.skip);
  // console.log(video.currentTime);
  console.log(video.duration); 
}

function handleRangeUpdate() {
  video[this.name] = this.value;
  // console.log(this.name);
  // console.log(this.value);
}
function handleProgress() {
  // const percent = (parseFloat(video.currentTime) / parseFloat(video.duration)) * 100;
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.color = "red";
  progressBar.style.flexBasis = `${percent}%`;
  // console.log(percent);
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/* View in fullscreen */
function openFullscreen() {
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) { /* Safari */
    video.webkitRequestFullscreen();
  } 
}

/* Close fullscreen */
function closeFullscreen() {
  // if (document.fullscreenElement) {
  //   document.exitFullscreen()
  //     .then(() => console.log("Document Exited from Full screen mode"))
  //     .catch((err) => console.error(err))
  // }
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } 
}

// function toggleFullscreen() {
//   // let elem = document.querySelector("video");

//   if (!document.fullscreenElement) {
//     fullScreen.requestFullscreen().catch((err) => {
//       alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
//     });
//   } else {
//     document.exitFullscreen();
//   }
// }


function isVideoInFullscreen() {
  if (document.fullscreenElement?.nodeName === 'VIDEO') {
    closeFullscreen();
    console.log("this is true");
    return true;
  }
  openFullscreen();
  console.log("this is false");
  return false;
}

function keyboardHandle(e) {
  console.log(e.key);
  if (!handleKeyboard[e.key]) {
    return; 
  }
  handleKeyboard[e.key]();
}
// Object 
const handleKeyboard = {
  ' ': togglePlay,
  f: isVideoInFullscreen,
  // 'ArrowRight': skipButtons.forEach((btn) => btn.addEventListener('click', skip)),
  ArrowRight:  () => video.currentTime += parseFloat(25),
  ArrowLeft: () =>  video.currentTime += parseFloat(-10),
  ArrowUp: () =>{
    video['volume'] += 0.1;
    volume.value = video['volume']; 
  },
  'ArrowDown': () => {
    video['volume'] -= 0.1;
    volume.value = video['volume']; 
  },
  '+': () => {
    video['playbackRate'] += 0.1;
    playbackSpeed.value = video['playbackRate'];
  },
  '-': () => {
    video['playbackRate'] -= 0.1;
    playbackSpeed.value = video['playbackRate'];
  },
}

video.addEventListener('dblclick', isVideoInFullscreen);
// Hook up the  event listeners
// video.addEventListener('click', togglePlay);
// This function will call when video starts
video.addEventListener('play', updateButton);
video.addEventListener('timeupdate', handleProgress);
// This function will call when video pauses
video.addEventListener('pause', updateButton);


toggle.addEventListener('click', togglePlay);

skipButtons.forEach((btn) => btn.addEventListener('click', skip));

ranges.forEach((range) => range.addEventListener('change', handleRangeUpdate));
ranges.forEach((range) => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
// progress.addEventListener('mousemove', (e) => {
//   if(mousedown) {
//     scrub(e);
//   }
// });
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullScreen.addEventListener('click', isVideoInFullscreen);
// fullScreen.addEventListener('fullscreenchange', openFullscreen);
// console.log(this.innerWidth);


window.addEventListener('keydown', keyboardHandle);

