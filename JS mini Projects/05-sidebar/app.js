// sidebar-toggle
// close-btn

const menuBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {
    // if(sidebar.classList.contains("show-sidebar")) {
    //     sidebar.classList.remove("show-sidebar");
    // } else {
    //     sidebar.classList.add("show-sidebar");
    // }
    // console.log(sidebar.classList);

    // sidebar will replace with 
    sidebar.classList.toggle("show-sidebar"); // it is equal to above 
        
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar");
});





