window.onload = function() {

  // Get elements
  let hamburger = document.getElementById("hamburger");
  let menuList = document.getElementById("menu");


  //Listener
  hamburger.addEventListener("click", function() {


    this.classList.toggle("open");
    menuList.classList.toggle("show");
    document.body.classList.toggle("noscroll");


  });


}
