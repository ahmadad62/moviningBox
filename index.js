// create various event listeners for the #container element and
// mouse events, keyboard events
// example: on [event] border-radius should become 50%, on [event] #container should shrink or grow, change color, disappear

// Variables
const container = document.getElementById("container");

//-----------------Mouse Events
// onclick / "click"
container.addEventListener("click", (event) => {
  event.preventDefault();
  container.style.background = "hotpink";
  container.style.borderRadius = "50%";

  event.stopImmediatePropagation();
  container.classList.add("puff-out-center");
});

// onmouseout / "mouseout"
container.addEventListener("mouseout", (event) => {
  event.target.style.borderRadius = "0";
  event.target.style.border = "none";
});

// onmousemove// "mousemove" --> Kiste bewegt sich
document.onmousemove = (e) => {
  // container bewegt sich nach rechts, wenn die Maus links von container ist
  if (container.offsetLeft - 50 >= e.clientX) {
    let goingRight = container.offsetLeft + 25;
    container.style.left = goingRight + "px";

    //container bewegt sich nach links, wenn die maus rechts vom container ist
  } else if (container.offsetLeft + 50 <= e.clientX) {
    let goingLeft = container.offsetLeft - 25;
    container.style.left = goingLeft + "px";

    // container bewegt sich nach unten, wenn die maus über dem container ist
  } else if (container.offsetTop - 50 >= e.clientY) {
    let goingDown = container.offsetTop + 25;
    container.style.top = goingDown + "px";

    //container bewegt sich nach oben, wenn die maus unter dem container ist
  } else if (container.offsetTop + 50 <= e.clientY) {
    let goingUp = container.offsetTop - 25;
    container.style.top = goingUp + "px";
  }
};

// gibt uns die Entfernung der linken Seite des container vom linken Bildschirmrand
console.log(container.offsetLeft);

//_______ Kiste bewegt sich dahin wo hingeklickt wird

document.addEventListener("click", (e) => {
  //   console.log(e.clientX, e.clientY);
  container.style.left = e.clientX + "px";
  container.style.top = e.clientY + "px";
});
