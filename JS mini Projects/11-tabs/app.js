const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
  // console.log(e.target.dataset.id);
  const id = e.target.dataset.id;
  if (id) {
    console.log("this is ID :",id);
    // remove selected from other buttons
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    // hide other articles
    articles.forEach((article) => {
        article.classList.remove("active");
    });
    const content = document.getElementById(id);
    content.classList.add("active");

  }
});
