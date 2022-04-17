let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");
let scrollTopBtn = document.getElementById("scroll-top");

/* SideMenu Toggle */
hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});

let header = document.querySelector("header");
window.onscroll = () => {
  /* Sticky Header */
  let pos = document.documentElement.scrollTop;
  if (pos > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  /* Scroll Top Button */
  if (pos > 300) {
    scrollTopBtn.style.display = "grid";
  } else {
    scrollTopBtn.style.display = "none";
  }

  scrollTopBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
};
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });
      // Ripple Effect JavaScript Code
      let buttons = document.querySelectorAll(".button");

      for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", (e)=>{
          e.preventDefault(); // preventing form submitting

          let overlay = document.createElement('span'); //creating a tag(span)
          overlay.classList.add("overlay"); //adding a class inside the span
          e.target.appendChild(overlay); //adding overlay tag inside the anchor tag at in HTML

          let xValue = e.clientX - e.target.offsetLeft; //by this we get perfect value where we will click
          let yValue = e.clientY - e.target.offsetTop; //by this we get perfect value where we will click

           overlay.style.left = xValue + "px"; //changing the position of the overlay according to our clicks on the button
           overlay.style.top = yValue + "px"; //changing the position of the overlay according to our clicks on the button
      });
      }
