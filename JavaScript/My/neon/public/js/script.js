const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links"); // ul

const navbar = document.querySelector("#nav");
const topLink = document.querySelector(".top-link");

const body = document.querySelector("#body"); // navActive

navToggle.addEventListener("click", (e) => {
  // linksContainer.classList.toggle('show-links');
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  console.log(containerHeight, linksHeight);
  // if (containerHeight === 0) {
  navToggle.classList.toggle("nav-toggle-rotate");
  // }
  linksContainer.style.height = containerHeight === 0 ? `${linksHeight}px` : 0;
});

// ********** fixed navbar ************
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    body.classList.remove("off-nav-is-active");
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1); // skip #
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");

    let position = element.offsetTop - navHeight + 20;

    // if (containerHeight === 0) {
      navToggle.classList.remove("nav-toggle-rotate");
    // }

    if (!fixedNav) {
      // home page
      position = position - navHeight;
    }

    if (navHeight > 72) {
      // I need to scroll more
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
