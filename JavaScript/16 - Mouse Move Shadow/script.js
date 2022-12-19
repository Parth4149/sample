
const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; // 100px

function shadow(e) {
  // const width = hero.offsetWidth;
  // const height = hero.offsetHeight;
  const { offsetWidth: width , offsetHeight: height } = hero; // using destructor
  let { offsetX: x, offsetY: y} = e;
  // console.log(x, y);

  if (this !== e.target) {
    console.log(e.target.offsetLeft, e.target.offsetTop);
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.floor((x / width * walk) - (walk / 2));
  const yWalk = Math.floor((y / height * walk) - (walk / 2)); 
  
  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7), 
  ${yWalk}px ${xWalk}px 0 rgba(0,0,255,0.7),
  ${-xWalk}px ${yWalk}px 0 rgba(0,255,255,0.7),
  ${xWalk}px ${-yWalk}px 0 rgba(0,255,0,0.7),
  ${yWalk}px ${-xWalk}px 0 rgba(255,0,0,0.7) 
  
  `; // 
  // console.log(xWalk, yWalk);
}



hero.addEventListener('mousemove', shadow);
