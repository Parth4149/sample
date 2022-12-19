
function playSound(e) {
    // if i need a particular audio, then i select that audio
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    
    if (!audio) return; // stop function from running all together
    
    key.classList.add("playing");
    audio.play();
    // audio.currentTime = 0; // rewind to the start
}

function removeTransition(e) {
    console.log(e.propertyName);
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

// keyboard
window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

