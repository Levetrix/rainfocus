function toggleMenu(e, nav){
  console.log("firing");
  e.preventDefault();
  if(nav.getAttribute("active") != null){
    nav.removeAttribute("active");
  } else {
    nav.setAttribute("active", "");
  }
}

function addMenuListeners(){
  var nav = document.querySelector("nav"),
      menuIcon = document.querySelector("a.menu-container"),
      expandIcon = document.querySelector("#nav-expand");

  menuIcon.addEventListener("click", function(e){
    toggleMenu(e, nav);
  });

  console.log(expandIcon);

  expandIcon.addEventListener("click", function(e){
    toggleMenu(e, nav);
  });
}

function init() {
  addMenuListeners();
  console.log("firing");
}

window.onload = init;
