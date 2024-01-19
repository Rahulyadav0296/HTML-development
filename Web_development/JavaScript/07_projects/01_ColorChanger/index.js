const buttons = document.querySelectorAll(".button");
console.log(buttons);

const body = document.querySelector("body");
console.log(body);

buttons.forEach((button) => {
  console.log(button);
  //Event listners
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "pink":
        body.style.backgroundColor = e.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        break;
      case "purple":
        body.style.backgroundColor = e.target.id;
        break;
      default:
        body.style.backgroundColor = "white";
        break;
    }
    // if(e.target.id === "grey"){
    //     body.style.backgroundColor= e.target.id;
    // }
  });
});
