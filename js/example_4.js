function toggleClass(el, className) {
  if (el.classList) {
    el.classList.toggle(className);
  } else {
    var classes = el.className.split(' ');
    var existingIndex = classes.indexOf(className);

    if (existingIndex >= 0)
      classes.splice(existingIndex, 1);
    else
      classes.push(className);

    el.className = classes.join(' ');
  }
}

var menu = document.querySelector("#offcanvas"),
    container = document.querySelector(".container");

menu.addEventListener("click", function(e){
  e.preventDefault();
  toggleClass(menu, "active");
  toggleClass(container, "active");
});