// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector('#date');
date.innerHTML = new Date().getFullYear(); 

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links'); // ul

const navbar = document.querySelector('#nav');
const topLink = document.querySelector('.top-link');

navToggle.addEventListener('click', (e) => {
  // linksContainer.classList.toggle('show-links');
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  linksContainer.style.height = (containerHeight === 0) ? `${linksHeight}px` : 0;
});

// ********** fixed navbar ************
window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  // console.log(scrollHeight, navHeight);
  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }

  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1); // skip # 
    const element = document.getElementById(id);
    
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");  
    
    let position = element.offsetTop - navHeight;
    // console.log(position);

    if (!fixedNav) { // home page
      position = position - navHeight;
    }

    if (navHeight > 72) { // I need to scroll more
      position = position + containerHeight; 
    }

    window.scrollTo({
      left:0,
      top:position,
    });
    linksContainer.style.height = 0;
  })
})



function updateHandle() {
  this.classList.add("show-project");
}
function removeUpdate() {
  this.classList.remove("show-project");
}

const projectDiv = document.querySelectorAll(".project-main");

projectDiv.forEach(div => div.addEventListener("mouseover", updateHandle));
projectDiv.forEach(div => div.addEventListener("mouseout", removeUpdate));

