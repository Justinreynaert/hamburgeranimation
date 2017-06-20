window.onload = function() {

  // Get elements
  let hamburger = document.getElementById("hamburger");
  let menuList = document.getElementById("menu");

  let messages = document.getElementById("messages");
  let baraterMenu = document.getElementById("barater");

  let overlay = document.getElementById("overlay");

  //Listener
  hamburger.addEventListener("click", function() {


    this.classList.toggle("open");
    menuList.classList.toggle("show");
    document.body.classList.toggle("noscroll");


  });

  messages.addEventListener("click", function() {

    baraterMenu.classList.toggle("show");
    overlay.classList.toggle("show");
    document.body.classList.toggle("noscroll");


    if (overlay.classList.contains("show")) {
      this.classList.remove("show");
    }
  })

  overlay.addEventListener("click", function() {
    baraterMenu.classList.toggle("show");
    overlay.classList.remove("show");
    document.body.classList.toggle("noscroll");

  })


}
